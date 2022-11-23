<script setup>
import HomeBackground from "../assets/valorantbackground.jpg";
import FeatureButtonBlue from "../components/AtomicComponents/Buttons/FeatureButtonBlue.vue";
import FeatureButtonGreen from "../components/AtomicComponents/Buttons/FeatureButtonGreen.vue";
import FeatureButtonOrange from "../components/AtomicComponents/Buttons/FeatureButtonOrange.vue";
import FeaturesCard from "../components/HomeComponents/FeaturesCard.vue";
</script>

<template>
  <div class="container">
    <img
      :src="HomeBackground"
      alt="valorant background"
      class="background-image"
    />
    <section>
      <h1>VALORANT MAGAZINE</h1>
      <p>
        Welcome to Valorant magazine. here you can find details about valorant
        agents and the weapons and many other features. <br />
        Feel free to explore the sections. Enjoy!
      </p>

      <div>
        <FeaturesCard>
          <font-awesome-icon icon=" fa-users " size="3x" color="#47aeff" />
          <p class="card-header">Agents</p>
          <br />
          <FeatureButtonBlue @click="$router.push('agents')"
            >Explore agents...</FeatureButtonBlue
          > </FeaturesCard
        ><br />
        <FeaturesCard>
          <font-awesome-icon
            icon="fa-solid fa-map-location-dot"
            size="3x"
            color="#11dbcf"
          />
          <p class="card-header">Maps</p>
          <br />
          <FeatureButtonGreen @click="$router.push('maps')"
            >Explore maps...</FeatureButtonGreen
          >
        </FeaturesCard>
        <br />

        <FeaturesCard>
          <font-awesome-icon icon="fa-solid fa-gun" color="#ffa76e" size="3x" />
          <p class="card-header">Weapons</p>
          <br />
          <FeatureButtonOrange>Explore weapons...</FeatureButtonOrange>
        </FeaturesCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}

.icons {
  width: 150px;
  height: 150px;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -10;
  opacity: 0.55;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100%;
  margin-top: 5%;
}

h1 {
  color: white;
  font-family: valorant;
  font-size: 5em;
  padding-top: 2%;
  text-align: center;
}

section p {
  color: white;
  font-family: "Roboto";
  font-size: 1.3em;
  text-align: center;
  opacity: 0.8;
}

.card-header {
  color: black;
  font-weight: 1000;
  font-size: 1rem;
}

section div {
  display: flex;
  flex-direction: row;
  gap: 25px;
}
</style>
