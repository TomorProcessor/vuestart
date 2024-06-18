<script>
export default {
  data() {
    return {
      phrases: [
        "Dawn's gentle light.",
        "Whispers of the forest.",
        "Echoes of laughter.",
        "Silent mountain peaks.",
        "Boundless blue horizons."
      ]
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="phrase in phrases" :key="phrase">
      <slot :item="phrase"></slot>
    </li>
  </ul>
</template>

<style scoped>

</style>