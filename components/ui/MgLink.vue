<template>
	<div :class="$style.root">
		<a v-if="href" :class="$style.link" :href="href" target="_blank">
			<slot /><icon-external-link :class="$style.icon" />
		</a>
		<div v-else :class="$style.link" @click="onClick">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IconExternalLink } from '@tabler/icons-vue';

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
	display: inline;
	height: 1rem;
	width: 1rem;
	vertical-align: text-bottom;
}
</style>
