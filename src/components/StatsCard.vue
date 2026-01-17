<template>
    <div class="card text-center">
        <div class="card-body">
            <div class="text-muted">{{ label }}</div>
            <div class="fs-3 fw-bold">{{ value }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StatsCard',

        props: {
            lable: {
                type: String,
                required: true
            },

            value: {
                type: [String, Number],
                required: true
            }
        }
    }
</script>