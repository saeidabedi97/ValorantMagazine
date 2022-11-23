<script setup>
import ValorantAgents from "../components/AgentComponents/ValorantAgents.vue";
</script>

<template>
  <Suspense>
    <ValorantAgents />
    <template #fallback>
      <p>Loading....</p>
    </template>
  </Suspense>
</template>

<style scoped></style>
