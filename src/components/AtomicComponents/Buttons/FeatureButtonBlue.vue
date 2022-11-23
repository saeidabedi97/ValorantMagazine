<script setup></script>

<template>
  <button><slot /></button>
</template>

<style scoped>
button {
  width: 200px;
  background-color: #5dbae8;
  font-family: "Roboto";
  font-weight: 300;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
