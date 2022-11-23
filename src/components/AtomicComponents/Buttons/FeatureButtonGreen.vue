<script setup></script>

<template>
  <button><slot /></button>
</template>

<style scoped>
button {
  background-color: rgb(17, 219, 207);
  font-family: "Roboto";
  font-weight: 300;
  width: 200px;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
