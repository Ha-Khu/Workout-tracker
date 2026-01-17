import { defineStore } from 'pinia';

export const useWorkoutsStore = defineStore('workouts', {
    state: () => ({
        workouts: []
    }),

    getters: {
        workoutCount(state){
            return state.workouts.length
        },

        totalExerciseCount(state){
            let total = 0
            for(const w of state.workouts){
                if(Array.isArray(w.exercises)) total += w.exercises.length
            }
            return total
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