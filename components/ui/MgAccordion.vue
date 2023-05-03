<template>
	<div :class="$style.root">
		<div :class="$style.header" @click="isOpen = !isOpen">
			<slot name="header" />
			<div :class="[$style.indicator, { [$style.open]: isOpen }]">▲</div>
		</div>
		<Transition
			name="slide"
			@before-enter="onBeforeEnter"
			@enter="onEnter"
			@before-leave="onBeforeLeave"
			@leave="onLeave"
		>
			<div v-if="isOpen" :class="[$style.content, { [$style.open]: isOpen }]">
				<slot />
			</div>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);

const onBeforeEnter = (el: Element) => {
	(el as HTMLElement).style.height = '0';
};
const onEnter = (el: Element) => {
	(el as HTMLElement).style.height = 'auto';
	const height = el.clientHeight + 'px';
	(el as HTMLElement).style.height = '0';
	setTimeout(() => {
		(el as HTMLElement).style.height = height;
	}, 0);
};
const onBeforeLeave = (el: Element) => {
	(el as HTMLElement).style.height = (el as HTMLElement).clientHeight + 'px';
	setTimeout(() => {
		(el as HTMLElement).style.height = '0';
	}, 0);
};
const onLeave = (el: Element) => {
	(el as HTMLElement).style.height = '0';
};
</script>

<style lang="scss" module>
.root {
}

.header {
	background: var(--color-primary);
	padding: 0.5rem 1rem;
	cursor: pointer;
	user-select: none;
	border-radius: 0.5rem;
	display: flex;
	color: var(--color-white);

	.indicator {
		margin-left: auto;
		transition: all 0.2s ease;
		transform: rotate(180deg);

		&.open {
			transform: rotate(0deg);
		}
	}
}

.content {
	display: none;
	height: 0;
	overflow: hidden;
	transition: all 0.2s ease;

	&.open {
		display: block;
		height: auto;
	}
}
</style>
