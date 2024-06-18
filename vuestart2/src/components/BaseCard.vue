<template>
  <div>
    <!--
          Ha nem adnak meg header nevű template-et,
          akkor nem renderel header slot-ot. Nem okoz
          hibát, ha nincs feltétel, olyankor üres header
          tag lenne akkor, ha nem lenne header slot megadva
      -->
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>