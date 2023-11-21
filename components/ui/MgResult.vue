<template>
	<div :class="$style.root">
		<div v-if="data">
			<h1 :class="$style.id">{{ id }}</h1>
			<img :class="$style.image" :src="data.png" />
			<UiMgLink :class="$style.pdfLink" :href="data.pdf" target="_blank" referrerpolicy="no-referrer">
				Download PDF
			</UiMgLink>
			<UiMgCode :class="$style.code" :code="prettied" block />
		</div>
		<div v-else>
			<h1>Error</h1>
			<pre :class="$style.error">{{ error }}</pre>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	id: string;
}>();

const error = ref(null);

const data = await $fetch<{
	png: string;
	pdf: string;
	note: Record<string, unknown>;
}>(`${useRuntimeConfig().public.apiEndpoint}/api/v1/result`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		id: props.id,
	}),
}).catch(e => {
	error.value = e;
});

const json = computed(() => {
	if (!data) return {};
	return data.note;
});

const prettied = computed(() => {
	try {
		return JSON.stringify(json.value, null, '  ');
	} catch (e) {
		return '';
	}
});
</script>

<style lang="scss" module>
.root {
}

.image {
	display: block;
	max-width: 100%;
}

.pdfLink {
	display: block;
}

.code {
	display: block;
}

.error {
	display: block;
	color: red;
}
</style>
