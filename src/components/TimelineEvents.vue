<template>

    <q-timeline-entry
        :title="event.title"
        :subtitle="event.subtitle"
        :body="event.body"
    >
    <div class="row">
        <q-btn
            class="row q-mr-auto"
            padding="sm"
            round
            color="deep-orange"
            icon="delete" 
        />
        <q-btn
            @click="showEditEventDialog = true"
            class="row"
            padding="sm"
            round
            color="light-green-7"
            icon="edit" 
        />
    </div>

        <q-dialog v-model="showEditEventDialog">

            <modal-add-edit-event
                type="edit"
                :event="event"
                @closeDialog="showEditEventDialog = false"
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