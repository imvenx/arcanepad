<template>
  <main style="text-align: center; padding-top: 2em">

    <!-- <div style="border:1px solid red; position:relative"> -->

    <!-- <div style="display:grid;  justify-content: center; text-align: center; margin:auto; "> -->
    <GamepadPhone />
    <!-- <AllIcons /> -->
    <!-- <GunPhone /> -->
    <!-- </div> -->

    <!-- <div style=" border:1px solid red; position:absolute; bottom:0; transform:rotate(45deg)">asd</div>
    </div> -->

    <h1>Arcanepad 0.0.1</h1>

    <!-- <a disabled href="https://github.com/imvenx/arcanepad/raw/master/downloads/desktop/arcanepad_0.0.1.AppImage"> -->
    <h3 style=";">
      <span style="color:grey; text-decoration: line-through;">
        Destkop download</span> (soon)
    </h3>
    <!-- </a> -->
    <br />
    <br />
    <!-- <a disabled href="https://github.com/imvenx/arcanepad/raw/master/downloads/android/arcanepad_0.0.1.apk"> -->
    <h3 style=";">
      <span style="color:grey; text-decoration: line-through;">
        Android download</span> (soon)
    </h3>
    <!-- </a> -->


  </main>
  <!-- <div style="text-align: center;">

    <ArcanepadLogo />
  </div> -->
</template>

<script setup lang="ts">
import ArcanepadLogo from '@/components/icons/ArcanepadLogo.vue';
import GamepadPhone from '@/components/icons/GamepadPhone.vue';
import GunPhone from '@/components/icons/GunPhone.vue';
import AllIcons from '@/components/icons/AllIcons.vue';


</script>

<style scoped>
h3 {
  display: inline;
}
</style>