<template>
    <div class="container mt-4">
        <h2>Workouts</h2>
        
        <BaseButton class="btn btn-primary mb-3" @click="addNewWorkout">Pridať tréning</BaseButton>

            <WorkoutList 
                :workouts="workoutsStore.workouts"
                @delete="deleteWorkout"
            />
    </div>
</template>

<script>
    import {useWorkoutsStore} from '@/stores/workouts';
    import BaseButton from '@/components/base/BaseButton.vue';
    import WorkoutCard from '@/components/WorkoutCard.vue';
    import WorkoutList from '@/components/WorkoutList.vue';
    
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
            WorkoutList
        }
    }
</script>