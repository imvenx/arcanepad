<template>
  <nav style="display:flex; gap:2em; margin:0 2em">
    <RouterLink to="/">
      <h3>Home</h3>
    </RouterLink>
    <RouterLink to="/privacy">
      <h3>Privacy</h3>
    </RouterLink>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
</script>

<style scoped></style>
