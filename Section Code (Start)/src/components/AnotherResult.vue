<template>
<div>
    <p>Counter is: {{ doubleCounter}}</p>
    <p> number of clicks: {{stringCounter}} </p>

    </div>

</template>

<script>
import {mapGetters} from 'vuex';
    export default {
            //computed: {
                // counterss() {
                //    return this.$store.getters.doubleCounter;
               //  }
           // }
           computed: {
           ...mapGetters ([
           'doubleCounter',
           'stringCounter'
           ])
           }
    }
</script>