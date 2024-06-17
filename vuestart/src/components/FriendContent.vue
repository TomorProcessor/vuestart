<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: "John Doe",
        phone: "+1234567890",
        email: "john.doe@example.com"
      }
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
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<style scoped>

</style>