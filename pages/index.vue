<template>
	<div :class="$style.root">
		<div :class="$style.desc">
			<h1>Misskey Gyotaku™</h1>
			<p>Misskey Gyotaku™ is a service that allows you to easily create a Gyotaku™ of any Misskey content.</p>

			<h2>Supported content</h2>
			<h3>Misskey</h3>
			<ul>
				<li>Notes</li>
				<li>Users</li>
			</ul>

			<h3>Mastodon</h3>
			<ul>
				<li>Toots</li>
				<!-- <li>Users</li> -->
			</ul>
		</div>
		<div :class="$style.ui">
			<UiFormMgInput v-model="input" :class="$style.input" placeholder="Misskey Instance URL" />
			<UiMgButton :class="$style.button" @click="submit">Go</UiMgButton>
			<!-- <UiMgAccordion>
				<template #header>
					<div>Advanced</div>
				</template>
				<div>
					<UiFormMgInput v-model="input" placeholder="Misskey Instance URL" />
					<UiMgButton>Go</UiMgButton>
				</div>
			</UiMgAccordion> -->
		</div>
	</div>
</template>
<script lang="ts" setup>
const router = useRouter();

const input = ref('');

const submit = () => {
	if (!input.value) return;
	fetch(`${useRuntimeConfig().apiEndpoint}/api/v1/generate`, {
		method: 'POST',
		body: JSON.stringify({
			url: input.value,
		}),
	})
		.then(res => res.json())
		.then(res => {
			if (res.id) {
				router.push(`/generate?id=${res.id}&target=${res.target}`);
			}
		});
};
</script>

<style lang="scss" module>
.root {
}

/* .desc {
	max-width: 50rem;
	margin: 0 auto;
} */

.ui {
	.input {
		display: inline-block;
		margin-right: 0.5rem;
	}

	.button {
		display: inline-block;
	}
}
</style>
