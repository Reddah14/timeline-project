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

<script src="./Layout.js"></script>

<style lang="scss" scoped src="./Layout.scss"></style>
