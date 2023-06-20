<template>
  <main style="text-align: center; padding-top: 2em">
    <!-- <div style="display:grid;  justify-content: center; text-align: center; margin:auto; "> -->
    <!-- <Phone /> -->
    <GamepadPhone />
    <!-- <AllIcons /> -->
    <!-- <GunPhone /> -->
    <!-- </div> -->

    <!-- <div style=" border:1px solid red; position:absolute; bottom:0; transform:rotate(45deg)">asd</div>
    </div> -->

    <!-- <h1>Arcanepad 0.0.1</h1> -->

    <!-- <a disabled href="https://github.com/imvenx/arcanepad/raw/master/downloads/desktop/arcanepad_0.0.1.AppImage"> -->
    <!-- <h3 style=";">
      <span style="color:grey; text-decoration: line-through;">
        Destkop download</span> (soon)
    </h3> -->
    <!-- </a> -->
    <!-- <a disabled href="https://github.com/imvenx/arcanepad/raw/master/downloads/android/arcanepad_0.0.1.apk"> -->
    <!-- <h3 style=";">
      <span style="color:grey; text-decoration: line-through;">
        Android download</span> (soon)
    </h3> -->
    <!-- </a> -->
    <div style="margin-top: 1em;font-size: 1.5em; line-height: 1.5em;">
      Deciphering ancient technology
      <br>
      <!-- Step into the <a href="https://discord.gg/6Pr9JBCGXy" target="_blank"> Chronochamber</a> (Discord) -->
      In the meanwhile, join our <a href="https://discord.gg/6Pr9JBCGXy" target="_blank"> Discord</a>
    </div>
    <img src="../assets/images/ArcanepadLogo.png" style="width:15vh; margin-top:1em; " />

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
import Phone from '@/components/icons/Phone.vue';


</script>

<style scoped>
h3 {
  display: inline;
}
</style>