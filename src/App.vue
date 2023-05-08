<template>
  <div style="margin:0 2em">
    <nav style="display:flex; gap:2em; ">
      <RouterLink to="/">
        <h3>Home</h3>
      </RouterLink>
      <RouterLink to="/privacy">
        <h3>Privacy</h3>
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
