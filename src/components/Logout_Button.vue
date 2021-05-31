<template>

    <q-btn
        @click="LogoutUser"
        style="max-width: 30px;"
        padding="10px 5px"
        color="secondary"
        text-color="dark"
        icon="logout"
    >
        <q-tooltip content-class="bg-accent">
          Log me Out !
        </q-tooltip>
    
    </q-btn>

</template>

<script>
export default {
    methods: {
        LogoutUser() {
            this.$objToaster.Toastify_ByeBye(this.$q.sessionStorage.getItem( 'userName' ))
            this.$objFunctions.removeUserName(this.user);
            this.$router.push({ path: '/' });
        }
    }
}
</script>