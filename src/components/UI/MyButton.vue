<script setup>
    const props = defineProps({
        color: {
            type: String,
            default: 'primary'
        },
        disabled: {
            type: Boolean,
            required: false
        }
    })

    const emit = defineEmits(['click'])

    const clickOnButton = () => {
        emit('click')
        console.log(12)
    }
</script>

<template>
    <button
            class="button"
            :class="[`btn_${color}`]"
            :style="disabled && {cursor: 'not-allowed'}"
            :disabled="disabled"
            @click="clickOnButton">
        <slot></slot>
    </button>
</template>


<style scoped>
    .button {
        width: 114px;
        padding: 7px 12px;
        background-color: transparent;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn_primary {
        color: #0D6EFD;
        border: 1px solid #0D6EFD;
    }
    .btn_danger {
        color: #DC3545;
        border: 1px solid #DC3545;
    }
</style>
