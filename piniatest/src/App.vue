<script setup>
import {useTaskStore} from "@/stores/TaskStore.js";
import TaskItem from "@/components/TaskItem.vue";
import {ref} from "vue";

const store = useTaskStore();

const favsOnly = ref(false);

function toggleFav() {
  favsOnly.value = !favsOnly.value
}
function resetStore() {
  store.$reset();
}
</script>

<template>
  <header>
    <h2>Stored name: {{ store.name }}</h2>
    <button @click="toggleFav">Change list</button>
  </header>
  <TaskItem v-if="favsOnly" v-for="item in store.favs" :key="'fav-' + item.id" :task="item" />
  <TaskItem v-else v-for="item in store.tasks" :key="'task-' + item.id" :task="item" />
  <button @click="resetStore">Reset store</button>
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
