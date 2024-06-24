<script setup>
import {useTaskStore} from "@/stores/TaskStore.js";

const props = defineProps({
  task: Object,
});

const store = useTaskStore();

function toggleFav() {
  store.toggleFav(props.task.id);
}
function handleDelete() {
  store.removeTask(props.task.id);
}
</script>

<template>
  <section>
    <div class="task-info">
      <p>Task title: {{ task.title }}</p>
      <p v-if="task.isFav"><strong>Task is favourite</strong></p>
      <button @click="toggleFav">Toggle fav</button>
      <button @click="handleDelete">Delete</button>
    </div>
  </section>
</template>

<style scoped>
.task-info {
  display: flex;
  gap: 1rem; /* Adjust the gap as needed */
}
</style>