<template>

    <q-footer elevated class="col text-deep-orange-11">

      <q-toolbar class="text-center q-mt-sm">
        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="text-center q-mb-md">
        <q-toolbar-title>
          <span class="toolbar-title_class">
            By: {{ author }}
          </span>
        </q-toolbar-title>
      </q-toolbar>

    </q-footer>

</template>

<script>
export default {
    props: [
        'title',
        'author'
    ]
}
</script>