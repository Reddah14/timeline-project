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
    font-size: 77px;
  }
  .name-class {
  margin-top: 60px;
  text-align: center;
  font-family: 'pattaya';
  font-size: 77px;
}
  .q-input {
    text-align: center;
    min-width: 400px;
    max-width: 500px;
  }
</style>
