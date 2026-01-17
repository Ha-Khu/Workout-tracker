<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label class="form-label">Názov tréningu</label>
            <input 
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Napr. push day"
                required
            >
        </div>

        <BaseButton type="submit"> 
            Pridať tréning
        </BaseButton>
    </form>
</template>

<script>
    import BaseButton from './base/BaseButton.vue';

    export default {
        name: 'AddWorkoutForm',

        components: {
            BaseButton
        },

        data() {
            return {
                name: ''
            }
        },

        methods: {
            submit() {
                if(!this.name.trim()) return

                this.$emit('add-workout', this.name)
                this.name = ''
            }
        },

        emits: ['add-workout']
    }
</script>