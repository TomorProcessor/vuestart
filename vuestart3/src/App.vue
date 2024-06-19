<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <UserView></UserView>
  <ProductView></ProductView>
</template>

<script>
import UserView from "@/components/UserView.vue";
import ProductView from "@/components/ProductView.vue";

export default {
  name: 'App',
  components: {
    UserView,
    ProductView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
