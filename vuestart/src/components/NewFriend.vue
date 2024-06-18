<script>
export default {
  emits: ['new-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    saveNewFriend() {
      this.$emit('new-friend', this.enteredName, this.enteredPhone, this.enteredEmail);
    }
  }
}
</script>

<template>
  <form class="newFriend" @submit.prevent="saveNewFriend">
    <h2>New Friend</h2>
    <label>
      <span>Name</span>
      <input type="text" v-model="enteredName"/>
    </label>
    <label>
      <span>Phone</span>
      <input type="tel" v-model="enteredPhone"/>
    </label>
    <label>
      <span>Email</span>
      <input type="email" v-model="enteredEmail"/>
    </label>
    <br/>
    <button type="submit">Save</button>
  </form>

</template>

<style scoped>

</style>