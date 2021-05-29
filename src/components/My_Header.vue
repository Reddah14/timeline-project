<template>

    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center glossy">
          <slot></slot>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

</template>

<script>
export default {

}
</script>

<style lang="scss">
 .toolbar-title_class {
   font-family: 'pattaya';
   letter-spacing: 1px;
 }
</style>