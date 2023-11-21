<template>
	<div :class="$style.root">
		<Suspense>
			<template #fallback>
				<h2>Loading...</h2>
			</template>
			<UiMgResult :id="id" />
		</Suspense>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;
</script>

<style lang="scss" module>
.root {}

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
