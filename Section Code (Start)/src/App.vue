<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result ></app-result>
                <app-another-result ></app-another-result>
                <app-another-counter> </app-another-counter>
                <hr>
                <app-counter ></app-counter>
                <hr>
                <app-practise> </app-practise>

            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';

     import AnotherResult from './components/AnotherResult.vue';
     import AnotherCounter from './components/AnotherCounter.vue';
     import Practise from './components/practise.vue';


    export default {

        components: {
            appCounter: Counter,

            appAnotherResult: AnotherResult,
            appPractise: Practise,
            appAnotherCounter: AnotherCounter
        }
    }
</script>

