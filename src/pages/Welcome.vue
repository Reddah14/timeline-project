<template>
  <q-page class="inline-block absolute-center ">

    <div>
      <h2 class="welcome-class text-white">hello...</h2>
    </div>
    <div>
      <small class="name-class absolute-center" >enter your name</small>
    </div>
    <div>
      <q-input autofocus rounded standout />
    </div>



  </q-page>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .welcome-class {
    margin-top: 120px;
    text-align: center;
    font-family: 'pattaya';
    font-size: 86px;
  }
  .enter-name-class {
    margin-top: 60px;
    font-family: 'pattaya';
    font-size: 65px;
  }
  .q-input {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    min-width: 400px;
    max-width: 500px;
  }
</style>
