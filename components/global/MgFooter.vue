<template>
	<footer :class="$style.root">
		<div>
			© {{ new Date().getFullYear() }}
			<UiMgLink :class="$style.link" href="https://github.com/sim1222">sim1222</UiMgLink>. View on
			<UiMgLink :class="$style.link" href="https://github.com/sim1222/misskey-gyotaku">GitHub</UiMgLink>
		</div>
	</footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.root {
}

.link {
	display: inline-block;
}
</style>
