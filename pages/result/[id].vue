<template>
	<div :class="$style.root">
		<div v-if="image">
			<h1 :class="$style.id">{{ id }}</h1>
			<img :class="$style.image" :src="image" />
			<UiMgLink :class="$style.pdfLink" :href="pdf" target="_blank" referrerpolicy="no-referrer">Download PDF</UiMgLink>
			<UiMgCode :class="$style.code" :code="prettied" block />
		</div>
		<div v-else>
			<h2>Loading...</h2>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;

const image = ref('');
const pdf = ref('');
const json = ref({});

const prettied = computed(() => {
	try {
		return JSON.stringify(json.value, null, '  ');
	} catch (e) {
		return '';
	}
});

onMounted(() => {
	fetch(`${useRuntimeConfig().apiEndpoint}/api/v1/result`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id,
		}),
	})
		.then(res => res.json())
		.then(data => {
			image.value = data.png;
			pdf.value = data.pdf;
			json.value = data.note;
		});
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
</style>
