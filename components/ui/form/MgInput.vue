<template>
	<div :class="$style.root">
		<input
			ref="inputRef"
			v-model="value"
			:class="$style.input"
			type="text"
			:placeholder="placeholder"
			@input="onInput"
		/>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	value?: string;
	placeholder?: string;
	modelValue: string;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', newValue: string): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const modelValue = toRef(props, 'modelValue');
const value = ref(modelValue.value);

watch(modelValue, newValue => {
	value.value = newValue;
});

watch(value, newValue => {
	emit('update:modelValue', newValue);
});

const onInput = () => {
	emit('update:modelValue', value.value);
};
</script>

<style lang="scss" module>
.root {
}

.input {
	border: solid 1px #ccc;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;

	&:focus {
		outline: none;
	}
	&::placeholder {
		color: #ccc;
	}
}
</style>
