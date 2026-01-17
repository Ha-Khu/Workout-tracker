import { defineStore } from 'pinia';

export const useWorkoutsStore = defineStore('workouts', {
    state: () => ({
        workouts: []
    }),

    getters: {
        workoutCount(state){
            return state.workouts.length
        }
    },

    actions: {
        addWorkout(name){
            this.workouts.push({
                id: Date.now(),
                name: name,
                exercises: []
            })
        },

        deleteWorkout(id){
            this.workouts = this.workouts.filter(w => w.id !== id)
        }
    }
})