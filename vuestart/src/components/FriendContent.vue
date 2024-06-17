<script>

export default {
  // itt a props kötelezően camelCase, erre konvertálja a html oldalon lévő kebab-case neveket a vue
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavourite'
  ],
  data() {
    return {
      detailsAreVisible: false,
      // közvetlenül kapott prop változót nem lehet módosítani, ezért ki kell menteni, és azt változtatni
      isFavouriteInner: this.isFavourite === '1'
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourite() {
      this.isFavouriteInner = !this.isFavouriteInner;
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ name + (this.isFavouriteInner ? ' (Favourite)' : '') }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavourite">Toggle favourite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<style scoped>

</style>