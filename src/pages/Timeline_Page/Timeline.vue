<template>
  <q-layout>
    <q-page-container>
        <q-page>
            <div class="q-pa-lg q-ma-lg bg-brown-5 text-white text-center fullscreen column">
              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap" rel="stylesheet">

                <logout-button />

                <q-scroll-area class="q-scroll-timeline">
                    
                    <q-timeline
                        class="q-px-md"
                        color="secondary"
                        side="left"
                        layout="comfortable"
                        dark
                    >
 
                        <q-timeline-entry heading body="Timeline Events" />

                        <timeline-events
                            v-for="event in events"
                            :key="event.id"
                            :event="event"
                        ></timeline-events>

                        <q-banner
                            v-if="!Object.keys(events).length"
                            class="bg-deep-purple-7 text-white q-ma-xl"
                            rounded
                        >
                            There are no Events in Timeline !
                            <template v-slot:action>
                                <q-btn
                                    @click="showAddEventDialog = true"
                                    label="Add Event" 
                                    color="white"
                                    flat
                                    glossy
                                />
                            </template>
                        </q-banner>

                    </q-timeline>

                </q-scroll-area>

                <div class="q-ma-lg absolute-bottom-right">

                    <add-event-button
                        @showAddEventDialog="showAddEventDialog = true"
                        v-if="Object.keys(events).length"
                    ></add-event-button>
                    
                </div>

			<q-dialog
                v-model="showAddEventDialog"
                persistent
            >

                <modal-add-edit-event
                    type="add"
					@closeDialog="showAddEventDialog = false"
                ></modal-add-edit-event>

			</q-dialog>


            </div>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script src="./Timeline.js"></script>

<style lang="scss" src="./Timeline.scss"></style>