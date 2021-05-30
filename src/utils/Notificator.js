import Vue from 'vue'

const objToaster = new Vue({
  methods: {
    Toastify_Welcome(_caption){
        return this.$q.notify({
            message: 'WELCOME',
            caption: _caption,
            color: 'amber-4',
            position: 'bottom',
            classes: 'glossy',
            icon: 'timeline',
            textColor: 'black',
        })
    },
    ToastifyEventAdded(){
        return this.$q.notify({
            message: 'Event Added Succesfully',
            color: 'green-7',
            position:'right',
            classes: 'glossy',
            icon: 'done',
        })
    },
    ToastifyEventEdited(_message){
        return this.$q.notify({
            message: 'Event ' + _message + ' was Edited Succesfully',
            color: 'deep-orange-5',
            position: 'top-left',
            icon: 'check_circle',
            textColor: 'black'
        })
    },
    ToastifyError(_message){
        return this.$q.notify({
            message: _message,
            color: 'deep-purple-4',
            position: 'center',
            icon: 'flutter_dash',
            textColor: 'black',
            timeout: 1500
        })
    }    
  }
})

Vue.prototype.$objToaster = objToaster