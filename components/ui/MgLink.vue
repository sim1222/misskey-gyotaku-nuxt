<template>
	<div :class="$style.root">
		<a v-if="href" :class="$style.link" :href="href" target="_blank">
			<slot /><i class="fa-solid fa-arrow-up-right-from-square" :class="$style.icon"></i>
		</a>
		<div v-else :class="$style.link" @click="onClick">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	href?: string;
	target?: string;
}>();

const router = useRouter();

const onClick = () => {
	if (props.href) {
		window.open(props.href, props.target || '_blank');
	} else {
		router.push(props.target || '/');
	}
};
</script>

<style lang="scss" module>
.root {
	display: inline-block;

	transition: all 0.1s ease-in-out;

	&:hover {
		opacity: 0.8;
		transform: translateY(-1px);
	}
}
.link {
	color: var(--color-link);
	text-decoration: underline;
	cursor: pointer;
}

.icon {
	font-size: 0.9rem;
	margin-left: 2px;
}
</style>
