<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
  <section class="container">
    <h2>{{ userObj.userName }}</h2>
    <p>{{ userObj.age }}</p>
  </section>
  <section class="container asdasdasd">
    <h2>{{ newUserRefs.userName }}</h2>
    <p>{{ newUserRefs.age }}</p>
  </section>
</template>

<script setup>

import {ref, reactive, toRefs} from "vue";

const userName = ref('Maximilian');

setTimeout(() => {
  userName.value = 'Max';
}, 2000);

const userObj = reactive({
  userName: 'Emily',
  age: 30
});

setTimeout(() => {
  userObj.userName = 'Max';
  userObj.age = 31;
},3000);

//új object, aminek a tagjai is reactive-ok
const newUserRefs = toRefs(userObj);

setTimeout(() => {
  newUserRefs.userName = 'Max';
  newUserRefs.age = 31;
},4000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>