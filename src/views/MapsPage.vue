<script setup>
import ValorantMaps from "../components/MapComponents/ValorantMaps.vue";
</script>

<template>
  <Suspense>
    <ValorantMaps />
    <template #fallback>
      <p>Loading....</p>
    </template>
  </Suspense>
</template>

<style scoped></style>
