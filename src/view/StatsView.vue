<template>
    <div class="container mt-4">
        <h2>Stats</h2>
        
        <div class="row g-3 mt-2">
            <div class="col-12 col-md-6">
                <StatsCard label="Počet tréningov" :value="workoutCount" />
            </div>

            <div class="col-12 col-md-6">
                <StatsCard label="Počet cvikov spolu" :value="totalExerciseCount" />
            </div>
        </div>
    </div>
</template>

<script>
    import StatsCard from '@/components/StatsCard.vue';
    import { useWorkoutsStore } from '@/stores/workouts';

    export default {
        name: 'StatsView',

        components: {
            StatsCard
        },

        data() {
            return {
                workoutsStore: useWorkoutsStore()
            }
        },

        computed: {
            workoutCount(){
                return this.workoutsStore.workoutCount
            },

            totalExerciseCount() {
                return this.workoutsStore.totalExerciseCount
            }
        }
    }
</script>