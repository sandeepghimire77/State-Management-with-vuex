<template>
<div>

    <p>Counter is: {{ counterss}}</p>



    </div>

</template>

<script>
    export default {
            computed: {
                counterss() {
                    return this.$store.getters.doubleCounter;
                 }
            }


    }
</script>