import Vue from 'vue'

const objFunctions = new Vue({
    methods: {
        saveUserName(_name) {
            this.$q.sessionStorage.set( 'userName', _name );
        }
    }
})

Vue.prototype.$objFunctions = objFunctions