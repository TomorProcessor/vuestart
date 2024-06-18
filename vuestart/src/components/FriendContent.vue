<script>

export default {
  // itt a props kötelezően camelCase, erre konvertálja a html oldalon lévő kebab-case neveket a vue
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite'
  // ],
  //ha validálni kell
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
      validator: function (value) {
        const regex = /^\+\d{10}$/;
        return regex.test(value);
      }
    },
    emailAddress: {
      type: String,
      required: true,
      validator: function (value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
      }
    },
    isFavourite: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      detailsAreVisible: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourite() {
      //kötelezően kebab-case
      this.$emit("toggle-favourite", this.id);
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ name + (this.isFavourite ? ' (Favourite)' : '') }}</h2>
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