<script>
export default {
  data() {
    return {
      products: [],
      error: null
    }
  },
  methods: {
    //test backend: https://github.com/TomorProcessor/laraveltest
    loadProducts() {
      fetch('http://127.0.0.1:8000/products', {
        method: 'POST',
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        this.products = data;
        this.error = null;
      }).catch((error) => {
        this.error = error;
      });
    }
  }
}
</script>

<template>
  <button @click="loadProducts">Load Products</button>
  <p v-if="error" style="color:red;font-weight: bold">Error getting data!</p>
  <ul v-else>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>