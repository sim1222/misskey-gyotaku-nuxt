<template>
	<div :class="$style.root">
		<h1>Generating Gyotaku™...</h1>
		<UiMgProgressBar :class="$style.progress" :progress="current" />
		<div :class="$style.percent">{{ `${current}%` }}</div>

		<div :class="$style.info">
			<div v-for="key in Object.keys(query)" :key="key">{{ key }}: {{ query[key as keyof typeof query] }}</div>
		</div>
		<div :class="$style.message">{{ message }}</div>
	</div>
</template>

<script lang="ts" setup>
const current = ref(1);
const message = ref('');

const route = useRoute();
const router = useRouter();

const query = route.query as {
	target: string;
	id: string;
};

const updateLoop = setInterval(() => {
	fetch(`${useRuntimeConfig().apiEndpoint}/api/v1/status?id=${query.id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.then(data => {
			current.value = data.progress;
			message.value = data.message;
		});
}, 1000);

onUnmounted(() => {
	clearInterval(updateLoop);
});

watchEffect(() => {
	if (current.value === 100) {
		router.push(`/result/${query.id}`);
	}
});
</script>

<style lang="scss" module>
.root {
	margin-top: 5rem;
}

@property --progress {
	syntax: '<percentage>';
	initial-value: 0%;
	inherits: false;
}
</style>
