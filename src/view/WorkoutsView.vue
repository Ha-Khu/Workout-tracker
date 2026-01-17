<template>
    <div class="container mt-4">
        <h2>Workouts</h2>
        
        <BaseButton class="btn btn-primary mb-3" @click="addNewWorkout">Pridať tréning</BaseButton>

            <WorkoutCard 
                v-for="workout in workoutsStore.workouts"
                :key="workout.id"
                :workout="workout"
                @delete="deleteWorkout"
            />
    </div>
</template>

<script>
    import {useWorkoutsStore} from '@/stores/workouts';
    import BaseButton from '@/components/base/BaseButton.vue';
    import WorkoutCard from '@/components/WorkoutCard.vue';
    
    export default {
        name: 'WorkoutsView',

        data(){
            return {
                workoutsStore: useWorkoutsStore()
            }
        },

        methods: {
            addNewWorkout() {
                const name = prompt("Zadaj názov tréningu")
                if(name){
                    this.workoutsStore.addWorkout(name)
                }
            },

            deleteWorkout(id){
                this.workoutsStore.deleteWorkout(id)
            }
        },

        components:{
            BaseButton,
            WorkoutCard
        }
    }
</script>