<template>
    <div class="container mt-4">
        <h2>Workouts</h2>
        
        <AddWorkoutForm @add-workout="addNewWorkout" />

        <WorkoutList 
            class="mt-4"
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
    import AddWorkoutForm from '@/components/AddWorkoutForm.vue';
    
    export default {
        name: 'WorkoutsView',

        data(){
            return {
                workoutsStore: useWorkoutsStore()
            }
        },

        methods: {
            addNewWorkout(name) {
                    this.workoutsStore.addWorkout(name)
            },

            deleteWorkout(id){
                this.workoutsStore.deleteWorkout(id)
            }
        },

        components:{
            BaseButton,
            WorkoutList,
            AddWorkoutForm
        }
    }
</script>