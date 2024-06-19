<script>
export default {
  data() {
    return {
      enteredName: '',
      userName: '',
      enteredEmail: '',
      password: ''
    }
  },
  methods: {
    saveUser() {
      //test backend: https://github.com/TomorProcessor/laraveltest
      fetch('http://127.0.0.1:8000/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.enteredName,
          email: this.enteredEmail,
          username: this.userName,
          password: this.password
        })
      });
    }
  }
}
</script>

<template>
  <section>
    <form class="newFriend" @submit.prevent="saveUser">
      <h2>New User</h2>
      <label>
        <span>Name</span>
        <input type="text" v-model="enteredName"/>
      </label>
      <label>
        <span>User name</span>
        <input type="text" v-model="userName"/>
      </label>
      <label>
        <span>User password</span>
        <input type="password" v-model="password"/>
      </label>
      <label>
        <span>Email</span>
        <input type="email" v-model="enteredEmail"/>
      </label>
      <br/>
      <button type="submit">Save</button>
    </form>
  </section>
</template>

<style scoped>

</style>