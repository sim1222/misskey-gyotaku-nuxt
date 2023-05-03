<!-- eslint-disable vue/no-v-html -->
<template>
	<div :class="$style.root">
		<pre v-if="props.block" :class="[$style.pre, `language-${lang}`]">
			<code :class="[$style.code, `language-${lang}`]" v-html="Prism.highlight(props.code, Prism.languages[lang], lang)" />
		</pre>
		<code
			v-else
			:class="[$style.code, `language-${lang}`]"
			v-html="Prism.highlight(props.code, Prism.languages[lang], lang)"
		/>
	</div>
</template>

<script lang="ts" setup>
import * as Prism from 'prismjs';
import 'prism-themes/themes/prism-one-dark.min.css';

const props = defineProps<{
	code: string;
	language?: string;
	block?: boolean;
}>();

const lang = computed(() => (Prism.languages[props.language] ? props.language : 'js'));
</script>

<style lang="scss" module>
.root {
}

.code {
	/* display: block; */
}
</style>
