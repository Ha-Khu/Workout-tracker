<template>
    <div>
        <WorkoutCard
            v-for="workout in workouts"
            :key="workout.id"
            :workout="workout"
            @delete="$emit('delete', $event)"
        />

        <p v-if="!workouts || workouts.length === 0" class="text-muted">
            Zatiaľ nemáš pridaný žiadny tréning
        </p>
    </div>
</template>

<script>
    import WorkoutCard from './WorkoutCard.vue';

    export default {
        name: 'WorkoutList',

        components: {
            WorkoutCard
        },

        props: {
            workouts: {
                type: Array,
                required: true
            }
        },

        emits: ['delete']
    }
</script>