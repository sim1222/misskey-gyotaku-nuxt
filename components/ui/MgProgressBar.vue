<template>
	<div :class="$style.root">
		<div :class="$style.bar" :style="{
				backgroundColor: props.color ? `var(--color-${props.color})` : 'var(--color-primary)',
				width: props.progress ? `${props.progress}%` : '0%',
			}"></div>
		<div v-if="props.unknown" :class="$style.unknown"></div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
	disabled?: boolean;
	progress?: number;
	unknown?: boolean;
}>();
</script>

<style lang="scss" module>
.root {
	.bar {
		height: 10px;
		border-radius: 5px;
		transition: width 0.2s ease;
	}
}
</style>
