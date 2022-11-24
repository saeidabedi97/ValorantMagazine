<script setup>
import { toRef, watch } from "vue";

const props = defineProps(["weapon"]);
const weapon = toRef(props, "weapon");
console.log("this is weapon variable", weapon.value);

// watch(weapon.value, (newWeapon) => {
//   console.log("the weapon variable is ", newWeapon);
// });
</script>
<template>
  <div class="details-container" v-if="weapon">
    <div>
      <h1>{{ weapon.displayName }}</h1>
    </div>
    <div v-if="weapon.weaponStats?.adsStats">
      <p>Weapon Stats</p>
      <hr />
      <p>Burst count: {{ weapon.weaponStats.adsStats.burstCount }}</p>
      <p>Fire rate: {{ weapon.weaponStats.adsStats.fireRate }}</p>
      <p>Zoom multiplier: {{ weapon.weaponStats.adsStats.zoomMultiplier }}</p>
    </div>
    <div v-if="weapon.weaponStats">
      <p>Other informations</p>
      <hr />
      <p>equip time: {{ weapon.weaponStats.equipTimeSeconds }}</p>
      <p>Fire rate: {{ weapon.weaponStats.fireRate }}</p>
      <p>Magazine size: {{ weapon.weaponStats.magazineSize }}</p>
    </div>
  </div>
</template>

<style scoped>
.details-container {
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-family: "Roboto";
  position: relative;
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  top: 55px;
  padding: 35px;
}

.details-container div:nth-child(2) {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.details-container div:nth-child(2) p:nth-child(1) {
  font-weight: 1000;
  font-size: 25px;
}

.details-container div:nth-child(2) p:nth-child(1n) {
  text-align: center;
}

.details-container div:nth-child(3) {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.details-container div:nth-child(3) p:nth-child(1) {
  text-align: center;
  font-size: 25px;
}

h1 {
  font-size: 40px;
  padding-top: 55px;
}
</style>
