<script>

export default {
  // itt a props kötelezően camelCase, erre konvertálja a html oldalon lévő kebab-case neveket a vue
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<style scoped>

</style>