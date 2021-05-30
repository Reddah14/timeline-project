<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
require('src/utils/Notificator');
require('src/utils/My-Functions');

export default {
  name: 'App'
}
</script>
