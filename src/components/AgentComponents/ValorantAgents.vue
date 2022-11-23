<script setup>
import { ref, watch } from "vue";
import { url } from "../../fetchURL";
import AgentBackground from "../../assets/backgroundAgent.png";
import { useRouter } from "vue-router";

const response = ref({});
const agentsUrl = url + "agents?isPlayableCharacter=true";

await new Promise(async (resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
  try {
    const res = await fetch(agentsUrl);
    console.log(res);
    response.value = await res.json();
  } catch (error) {
    response.value = "error! could not reach the api";
  }
});

console.log("this is the json response", response.value);

const agent = ref({});
const router = useRouter();
const showText = ref(true);
function agentSelected(agentObj) {
  agent.value = agentObj;
  router.push({
    name: "AgentDetails",
    params: { agentName: agentObj.displayName },
  });
  showText.value = false;
}
console.log(showText.value);
</script>

<template>
  <router-link to="/" class="home-link"> &lt Back to Home</router-link>
  <img :src="AgentBackground" alt="background image" class="backgroundAgent" />
  <div>
    <img
      v-for="(item, index) in response.data"
      :key="index"
      :src="item.displayIcon"
      alt="Valorant image"
      class="agent-icons"
      @click="agentSelected(item)"
    />
    <router-view :agent="agent"> </router-view>
  </div>
  <p v-if="showText">Select an agent to see the details</p>
</template>

<style scoped>
.home-link {
  position: absolute;
  color: white;
  text-decoration: none;
  padding: 25px;
}
.backgroundAgent {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  opacity: 0.7;
}

div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
  position: relative;
  top: 50px;

  padding: 25px;
}

h1 {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding-top: 10px;
}
p {
  color: white;
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 1000;
  margin-top: 150px;
  text-align: center;
  letter-spacing: 15px;
  background-color: rgba(0, 0, 0, 0.7);
}

.agent-icons {
  width: 75px;
  height: 75px;
  background-color: aliceblue;
  cursor: pointer;
}

.agent-icons:hover {
  box-shadow: 0 0 13px 15px gray;
}
</style>
