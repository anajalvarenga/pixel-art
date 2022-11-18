<template>
    <select
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
        <option value="12">12 x 12</option>
        <option value="24">24 x 24</option>
        <option value="36">36 x 36</option>
    </select>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
}
</script>