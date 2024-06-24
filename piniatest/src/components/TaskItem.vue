<script setup>
const props = defineProps({
  task: Object,
});
</script>

<template>
  <section>
    <div class="task-info">
      <p>Task title: {{ task.title }}</p>
      <p v-if="task.isFav"><strong>Task is favourite</strong></p>
    </div>
  </section>
</template>

<style scoped>
.task-info {
  display: flex;
  gap: 1rem; /* Adjust the gap as needed */
}
</style>