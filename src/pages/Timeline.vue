<template>
  <q-layout>
    <q-page-container>
        <q-page>
            <div class="q-pa-lg q-ma-lg bg-brown-5 text-white text-center fullscreen column">
              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap" rel="stylesheet">

                <q-scroll-area class="q-scroll-timeline">

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
                        />

                    </q-timeline> 
                </q-scroll-area>     

            </div>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('events', ['events'])
    }
}
</script>

<style>
    .q-timeline {
            font-family: 'poppins';
        }
    .q-timeline__title {
            font-size: 28px;
        }        
    .q-scroll-timeline {
        display: flex;
        flex-grow: 1;
    }

</style>