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
      },
      clearUser() {
        this.user = ''
      }
    },
    computed: {
      userNameToUpperCase() {
        return this.user.toUpperCase();
      }
    }
  }