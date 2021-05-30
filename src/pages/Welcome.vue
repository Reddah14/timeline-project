<template>
  <q-page class="inline-block absolute-center ">

    <div class="text-center q-pa-md flex flex-center">

      <div>

        <div>
          <p class="welcome-class text-white">
            hello...
          </p>
        </div>

        <div v-if="!isUserCatched">
          <p class="enter-name-class">
            enter your name
          </p>
          <q-input
            v-model="user"
            @keyup.enter="catchUser"
            autofocus
            rounded
            standout
          />
          <q-btn
            @click="catchUser"
            push
            class="q-ma-lg"
            padding="xs lg"
            color="warning"
            icon="done"
          />
        </div>

        <div v-else class="user-class">
          {{ user }}
        </div>


      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      isUserCatched: false
    }
  },
  methods: {
    catchUser() {
      this.$objFunctions.saveUserName(this.user);
      this.isUserCatched = true;
        console.log( this.$q.sessionStorage.getItem("userName") )
    }
  }
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
