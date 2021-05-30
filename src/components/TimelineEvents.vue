<template>

    <q-timeline
        class="q-px-md"
        color="secondary"
        side="left"
        layout="comfortable"
        dark
    >
        
        <q-timeline-entry heading body="Timeline Events" />

        <q-timeline-entry
            v-for="event in events"
            :key="event.id"
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
		

    </q-timeline>

</template>

<script>
export default {
    data() {
        return {
            showEditEventDialog: false
        }
    },
    props: [
        'events'
    ],
    components: {
        'modal-add-edit-event' : require('src/components/ModalAddEditEvent').default
    }
}
</script>

<style>

</style>