/**
 * Created by Akshar on 10/27/2017.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
        return state.counter*2;

       // return state.counter = state.counter*2;

        },
        stringCounter : state => {
        return state.counter + " " + 'click';

    //getters has been implemented sorry...
}
    },
mutations: {
    increment: state => {
        state.counter++;
    },
    decrement: state => {
        state.counter--;
    }
}
});



