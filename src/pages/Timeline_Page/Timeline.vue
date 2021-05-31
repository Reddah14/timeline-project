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

                    </q-timeline>

                </q-scroll-area>

                <div class="q-ma-lg absolute-bottom-right">
                    <q-btn
                        @click="showAddEventDialog = true"
                        padding="sm"
                        color="secondary"
                        text-color="brown-9"
                        icon="add"
                        size="29px"
                    />
                </div>

			<q-dialog v-model="showAddEventDialog">

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