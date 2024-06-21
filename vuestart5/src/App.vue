<template>
  <section class="container" ref="sectionRef">
    <h2>{{ userName }}</h2>
  </section>
  <section class="container">
    <h2>{{ userObj.userName }}</h2>
    <p>{{ userObj.age }}</p>
  </section>
  <section class="container asdasdasd">
    <h2>{{ newUserRefs.userName.value }}</h2>
    <p>{{ newUserRefs.age }}</p>
  </section>
  <section class="container">
    <p>{{ computedUsersData }}</p>
  </section>
  <test-comp :test-prop="testCompData" @test-emit="testEmit"></test-comp>
</template>

<script setup>

import {ref, reactive, toRefs, computed, watch} from "vue";
import TestComp from "@/TestComp.vue";

const userName = ref('Maximilian');
const sectionRef = ref(null);
const testCompData = 'this is the test';

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
  console.log(sectionRef.value);
},4000);

const computedUsersData = computed(() => {
  return userName.value + ' ' + userObj.userName + ' ' + userObj.age + ' ' + newUserRefs.userName.value;
})

watch(newUserRefs.userName, (newUserName, oldUserName) => {
  console.log('oldUserName',oldUserName);
  console.log('newUserName', newUserName);
})

function testEmit(data) {
  console.log(data);
}

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