<template>
    <button
        :type="type"
        class = "btn"
        :class="`btn-${variant}`"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script>
    export default{
        name: 'BaseButton',

        props: {
            variant: {
                type: String,
                default: 'primary'
            },
            type: {
                type: String,
                default: 'button'
            }
        },

        emits: ['click']
    }
</script>