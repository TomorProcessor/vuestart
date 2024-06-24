<script setup>
const props = defineProps({
  task: Object,
});
</script>

<template>
  <section>
    <p>Task title: {{ task.title }}</p>
    <p v-if="task.isFav">Task is favourite</p>
  </section>
</template>

<style scoped>

</style>