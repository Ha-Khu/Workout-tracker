<template>
    <div class="card mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
                <h5 class="card-title mb-1">{{ workout.name }}</h5>
                <small class="text-muted">
                    Počet cvikov: {{ exerciseCount }}
                </small>
            </div>

            <BaseButton variant="danger" @click="$emit('delete', workout.id)">Zmazať</BaseButton>
        </div>
    </div>
</template>

<script>
    import BaseButton from './base/BaseButton.vue';

    export default {
        name: 'WorkoutCard',

        components: {
            BaseButton
        },

        props: {
            workout: {
                type: Object,
                required: true
            }
        },

        computed: {
            exerciseCount(){
                const ex = this.workout && this.workout.exercises
                return Array.isArray(ex) ? ex.length : 0
            }
        },

        emits: ['delete']
    }
</script>