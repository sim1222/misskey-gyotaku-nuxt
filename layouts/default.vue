<template>
	<div :class="$style.root">
		<MgHeader />
		<div :class="$style.slot">
			<slot />
		</div>
		<MgFooter :class="$style.footer" />
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.root {
}

.slot {
	max-width: 70rem;
	margin: 0 auto;
	margin-bottom: auto;
	@media screen and (max-width: 71rem) {
		padding: 0 1rem;
	}
}

.footer {
	margin-top: 2rem;
	text-align: center;
	/* position: fixed;
	bottom: 0;
	left: 0; */
}
</style>
