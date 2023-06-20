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
    <div id="arcanepadText" style="text-align: center;  font-size: 2em; color:cyan;">
      Arcanepad
    </div>
    <RouterView />
  </div>
  <br>
  <!-- <div style="background: linear-gradient(to top,   blue, red); width: 100vw; height:100vh"> </div> -->
</template>

<script setup lang="ts">
</script>

<style scoped>
/* #arcanepadText {
  animation: arcanepadTextAnim 3s infinite;
}

@keyframes arcanepadTextAnim {
  50% {
    color: cyan
  }
} */
</style>
