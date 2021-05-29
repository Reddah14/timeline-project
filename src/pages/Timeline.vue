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
export default {
  data () {
    return {
        events: [
            {
                id: 1,
                title: 'I was born',
                subtitle: 'February 8, 1986',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 2,
                title: '1st trip home',
                subtitle: 'February 21, 1986',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 3,
                title: 'London trip',
                subtitle: 'March 14, 2020',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },                        
        ]
    }
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