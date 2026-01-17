<template>
    <div class="container mt-4">
        <h2>Home</h2>
        <p>V aplikácii máš {{ workoutCount }} tréningov</p>
    </div>
</template>

<script>
    import { useWorkoutsStore } from '@/stores/workouts';

    export default {
        name: 'HomeView',

        data(){
            return {
                workoutsStore: useWorkoutsStore()
            }
        },

        computed: {
            workoutCount() {
                return this.workoutsStore.workoutCount
            }
        }
    }
</script>