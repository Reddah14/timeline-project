import Vue from 'vue'

const objFunctions = new Vue({
    methods: {
        saveUserName(_name) {
            this.$q.sessionStorage.set( 'userName', _name );
        },
        removeUserName() {
            this.$q.sessionStorage.remove( 'userName' );
        }
    }
})

Vue.prototype.$objFunctions = objFunctions