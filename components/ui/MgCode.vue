<!-- eslint-disable vue/no-v-html -->
<template>
	<div :class="$style.root">
		<pre v-if="props.block" :class="[$style.pre, `language-${prismLang}`]">
			<code :class="[$style.code, `language-${prismLang}`]" v-html="Prism.highlight(props.code, Prism.languages[prismLang], prismLang)" />
		</pre>
		<code
			v-else
			:class="[$style.code, `language-${prismLang}`]"
			v-html="Prism.highlight(props.code, Prism.languages[prismLang], prismLang)"
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

const lang = computed(() => props.language ?? 'js');
const prismLang = computed(() => (Prism.languages[lang.value] ? lang.value : 'js'));
</script>

<style lang="scss" module>
.root {
}

.code {
	/* display: block; */
}
</style>
