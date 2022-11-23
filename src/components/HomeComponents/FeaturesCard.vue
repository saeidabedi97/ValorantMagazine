<script setup></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 25px;
}
</style>
