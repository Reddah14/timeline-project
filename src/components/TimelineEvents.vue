<template>

        <q-timeline-entry
            :title="event.title"
            :subtitle="event.subtitle"
            :body="event.body"
        >
            <q-btn
                @click="showEditEventDialog = true"
                class="row"
                padding="sm"
                round
                color="deep-orange"
                icon="edit" 
            />

            <q-dialog v-model="showEditEventDialog">

                <modal-add-edit-event
                    type="edit"
                    :event="event"
                ></modal-add-edit-event>

            </q-dialog>

        </q-timeline-entry>

</template>

<script>
export default {
    data() {
        return {
            showEditEventDialog: false
        }
    },
    props: [
        'event'
    ],
    components: {
        'modal-add-edit-event' : require('src/components/ModalAddEditEvent').default
    }
}
</script>

<style>

</style>