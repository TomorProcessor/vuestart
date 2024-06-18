<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>
<!--
      ha scoped a style, akkor lokálissá válik,
      ilyenkor csak a template-re lesz hatással,
      semmi másra, gyerekeire se
-->
<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>