<script setup>
import {onMounted, defineProps, defineEmits} from "vue";

const props = defineProps({
  testProp: String
});
const emit = defineEmits(['test-emit']);

onMounted(() => {
  console.log(props.testProp);
});
</script>

<template>
  <section class="container">
    <p>{{ props.testProp }}</p>
    <button @click="emit('test-emit', props.testProp)">Test Emit</button>
  </section>
</template>

<style scoped>

</style>