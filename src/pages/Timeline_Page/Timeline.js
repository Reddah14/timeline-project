import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            showAddEventDialog: false
        }
    },
    computed: {
        ...mapGetters('events', ['events'])
    },
    components: {
        'modal-add-edit-event' : require('src/components/ModalAddEditEvent').default,
        'timeline-events' : require('src/components/TimelineEvents').default,
        'logout-button' : require('src/components/Logout_Button').default
    },
    mounted() {
       	this.$objToaster.Toastify_Welcome( this.$q.sessionStorage.getItem("userName") );
    }
}