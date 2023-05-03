<template>
	<div :class="$style.root">
		<button :class="[$style.button, { [$style[color ?? 'primary']]: color ?? 'primary' }]" :disabled="disabled">
			<slot />
		</button>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
	disabled?: boolean;
}>();
</script>

<style lang="scss" module>
.root {
}

.button {
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.2s ease, box-shadow 0.2s ease, transform 0.6s cubic-bezier(0, 0.87, 0.15, 1.02);
	box-sizing: border-box;

	&:hover {
		opacity: 0.8;
		box-shadow: 0 0 0 1px var(--color-info);
	}

	&:active {
		transition-duration: 5s;
		opacity: 0.1;
		box-shadow: 0 0 0 1px var(--color-info);
		transform: scale(0.6);
	}

	&.primary {
		background-color: var(--color-primary);
		color: #fff;
	}
	&.secondary {
		background-color: var(--color-secondary);
		color: #fff;
	}
	&.info {
		background-color: var(--color-info);
		color: #fff;
	}
	&.success {
		background-color: var(--color-success);
		color: #fff;
	}
	&.warning {
		background-color: var(--color-warning);
		color: #fff;
	}
	&.danger {
		background-color: var(--color-danger);
		color: #fff;
	}
}
</style>
