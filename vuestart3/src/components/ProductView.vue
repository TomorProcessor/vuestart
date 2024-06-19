<script>
export default {
  data() {
    return {
      products: []
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
      });
    }
  }
}
</script>

<template>
  <button @click="loadProducts">Load Products</button>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>