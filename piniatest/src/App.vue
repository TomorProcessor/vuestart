<script setup>
import {useTaskStore} from "@/stores/TaskStore.js";
import TaskItem from "@/components/TaskItem.vue";

const store = useTaskStore();
</script>

<template>
  <header>
    <h2>Stored name: {{ store.name }}</h2>
  </header>
  <TaskItem v-for="item in store.tasks" :key="item.id" :task="item" />
  <main>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
