<script setup>
import Weapons from "../components/WeaponComponents/Weapons.vue";
</script>

<template>
  <Suspense>
    <Weapons />
    <template #fallback>
      <p>Loading....</p>
    </template>
  </Suspense>
</template>

<style scoped></style>
