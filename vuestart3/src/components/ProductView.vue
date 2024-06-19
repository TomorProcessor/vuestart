<script>
export default {
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
        console.log(data);
      });
    }
  }
}
</script>

<template>
  <button @click="loadProducts">Load Products</button>
</template>

<style scoped>

</style>