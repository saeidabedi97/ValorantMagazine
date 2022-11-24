<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { url } from "../../fetchURL";
import WeaponSectionBackground from "../../assets/weaponbackground.jpg";

const response = ref({});
const mapsUrl = url + "weapons";

await new Promise(async (resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
  try {
    const res = await fetch(mapsUrl);
    console.log(res);
    response.value = await res.json();
  } catch (error) {
    response.value = "error! could not reach the api";
  }
});

console.log("this is the json response for weapons", response.value);

const weapon = ref({});
const router = useRouter();
const showText = ref(true);
function weaponSelected(weaponObj) {
  weapon.value = weaponObj;
  router.push({
    name: "weaponDetails",
    params: { weaponName: weaponObj.displayName },
  });
  showText.value = false;
}
</script>

<template>
  <img
    :src="WeaponSectionBackground"
    alt="background image"
    class="weapon-section-background"
  />

  <router-link to="/" class="home-link"> &lt Back to Home</router-link>
  <div class="weapon-container">
    <img
      v-for="(item, index) in response.data"
      :src="item.displayIcon"
      alt="weapon icons"
      class="weapon-icons"
      :key="index"
      @click="weaponSelected(item)"
    />
  </div>

  <p v-if="showText" class="select-weapon-text">
    Select a weapon to see the details.
  </p>
  <router-view :weapon="weapon"> </router-view>
</template>

<style scoped>
.weapon-section-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -15;
}
.home-link {
  position: absolute;
  color: white;
  text-decoration: none;
  padding: 25px;
}

.weapon-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
  position: relative;
  top: 50px;

  padding: 25px;
}

.weapon-icons {
  width: 150px;
  height: 65px;
  background-color: aliceblue;
  cursor: pointer;
}

.weapon-icons:hover {
  box-shadow: 0 0 13px 15px gray;
}

.select-weapon-text {
  color: white;
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 1000;
  margin-top: 150px;
  text-align: center;
  letter-spacing: 15px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
