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
                class="row text-center"
                padding="sm"
                round
                color="deep-orange"
                icon="edit" 
            />
        </q-timeline-entry>

    </q-timeline>

</template>

<script>
export default {
    props: ['events']
}
</script>

<style>

</style>