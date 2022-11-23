<script setup>
import { toRefs } from "vue";

const props = defineProps(["agentName", "agent"]);
const { agentName, agent } = toRefs(props);
</script>
<template>
  <div class="image-container">
    <img
      :src="agent.background"
      alt="agent background"
      class="agent-background"
    />
    <img
      :src="agent.fullPortrait"
      alt="agent portrait"
      class="agent-portrait"
    />
  </div>
  <div class="agent-details">
    <h2>{{ agentName }}</h2>
    <br />
    <p>{{ agent.description }}</p>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  top: 100px;
  left: -250px;
}
.agent-background {
  width: 300px;
  position: absolute;
}

.agent-portrait {
  position: absolute;
  width: 400px;
  left: -35px;
  top: 40px;
}

.agent-details {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 250px;
}

h2 {
  color: white;
  font-weight: 1000;
  font-family: "Roboto";
  font-size: 65px;
}

p {
  color: white;
  font-weight: 300;
  font-family: "Roboto";
  font-size: 25px;
  width: 650px;
}
</style>
