<template>
  <q-layout view="hHh lpR fFf" :style="styles">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons|Pattaya:100,300,400,500,700" rel="stylesheet">

    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center glossy">
          {{ Title }} <span class="toolbar-title_class">By:<small>{{ Author }}</small></span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="col text-deep-orange-11">
      <q-toolbar class="text-center q-mt-sm">
        <q-toolbar-title>{{ Title }}</q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="text-center q-mb-md">
        <q-toolbar-title>
          <span class="toolbar-title_class">
            By: {{ Author }}
          </span>
        </q-toolbar-title>
      </q-toolbar>      
    </q-footer>    

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
      Title: 'Test Frontend Finteca',
      Author: 'Salvador'
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
  }  
}
</script>

<style lang="scss" scoped>
 .toolbar-title_class {
   font-family: 'pattaya';
   letter-spacing: 1px;
 }
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
