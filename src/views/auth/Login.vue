<template>
  <div>
      <h3>Login</h3>
      <p v-if="loading">Loading...</p>
      <p v-if="error" class="text-red-600">{{error}}</p>
      <button @click="login" class="bg-green-400 text-white rounded px-4 py-1">Login</button>
  </div>
</template>

<script>
export default {

    data() {
        return {
            user: {
                email: "saimon@gmail.com",
                password: "password"
            },
            loading: false,
            error: null
        }
    },
    methods: {
        async login() {
            try {
                this.loading = true;
                await this.$store.dispatch('login', this.user);
                
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }

}
</script>

<style>

</style>