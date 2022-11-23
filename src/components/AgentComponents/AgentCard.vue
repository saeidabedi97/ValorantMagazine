<script setup></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  position: relative;
  background-color: aliceblue;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
</style>
