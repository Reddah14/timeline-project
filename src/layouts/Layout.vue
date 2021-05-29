<template>
  <q-layout view="hHh lpR fFf" :style="styles">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons|Pattaya:100,300,400,500,700" rel="stylesheet">

    <my-header>
      {{ title }} <span class="toolbar-title_class">By:<small>{{ author }}</small></span>
    </my-header>

    <my-footer
      :title="title"
      :author="author"
    ></my-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const My_BG_Image = 'https://cdn.pixabay.com/photo/2020/01/11/13/22/woman-4757533_960_720.jpg';

export default {
  data() {
    return {
      title: 'Test Frontend Finteca',
      author: 'Salvador'
    }
  },
  computed: {
    styles() {
        return {
          'background-image': `url(${ My_BG_Image })`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }
    }
  },
  components: {
    'my-header' : require('src/components/My_Header').default,
    'my-footer' : require('src/components/My_Footer').default
  }
}
</script>

<style lang="scss" scoped>

  @media screen and (max-width: 700px) { 
    .q-header {
      display: none;
    }
  } 
  @media screen and (min-width: 700px) { 
    .q-footer {
      display: none;
    }
  }
</style>
