<script setup></script>

<template>
  <header></header>

  <main>
    <router-view></router-view>
  </main>

  <footer></footer>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
}

header p {
  font-family: valorant;
  color: white;
}
</style>
