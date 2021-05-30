import Vue from 'vue'

const objToaster = new Vue({
  data: {
  },
  methods: {
    Toastify_Welcome(_caption){
        return this.$q.notify({
            message: 'WELCOME',
            caption: _caption,
            color: 'teal-4',
            position: 'bottom',
            classes: 'glossy',
            icon: 'timeline'
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
            textColor: 'black',
        })
    },
    ToastifyError(){
        return this.$q.notify({
            message: 'Enter the fields correctly !',
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