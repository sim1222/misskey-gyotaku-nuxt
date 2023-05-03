<template>
	<div :class="$style.root">
		<div :class="$style.title">
			<a href="/">Misskey Gyotaku™</a>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
<style lang="scss" module>
.root {
	background-color: #fff;
	border-bottom: 1px solid #eaeaea;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 0 2rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.title {
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: -0.05rem;
	color: var(--color-black);
}
</style>
