<template>
    <div class="container mt-4">
        <h2>Workouts</h2>
        
        <BaseButton class="btn btn-primary mb-3" @click="addNewWorkout">Pridať tréning</BaseButton>

        <ul class="list-group">
            <li v-for="workout in workoutsStore.workouts"
                :key="workout.id"
                class="list-group-item"
            >
                {{ workout.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import {useWorkoutsStore} from '@/stores/workouts'
    import BaseButton from '@/components/base/BaseButton.vue';
    
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
            }
        },

        components:{
            BaseButton
        }
    }
</script>