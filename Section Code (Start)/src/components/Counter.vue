<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>




    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;
                //this.$store.getters.doubleCounter;
            },
            decrement() {
                this.$store.state.counter--;
               // this.$store.getters.doubleCounter;
            }
        }
    }
</script>