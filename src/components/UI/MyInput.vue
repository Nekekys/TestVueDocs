
<script setup>
    const emit = defineEmits(['update:value'])
    const props = defineProps({
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            required: true
        }
    })

    const updateValue = (e) => {
        emit('update:value', e.target.value)
    }
</script>

<template>
    <input :value="value" @input="updateValue" class="input" type="text" :placeholder="placeholder" autofocus >
</template>


<style scoped>
    .input {
        padding: 5% 7%;
        width: 86%;
        font-size: 14px;
        font-family: 'Fira Sans', sans-serif;
        font-weight: 700;
        background-color: #ffffff;
        border: 1px solid #E9ECEF;
        border-radius: 8px;
        color: #6C757D;

        outline: none;
    }
    .input::placeholder  {
        color: #6C757D;
    }
    .input::-webkit-outer-spin-button,
    .input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
