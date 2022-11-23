<script setup>
import { ref } from "vue";
import { url } from "../../fetchURL";
import { Carousel3d, Slide } from "vue3-carousel-3d";
import MapSectionBackground from "../assets/mapsectionbackground.png";

const response = ref({});
const mapsUrl = url + "maps";

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

console.log("this is the json response for map", response.value);
</script>

<template>
  <img
    :src="MapSectionBackground"
    alt="background image"
    class="map-section-background"
  />

  <router-link to="/" class="home-link"> &lt Back to Home</router-link>

  <Carousel3d
    class="carousel-container"
    :controls-visible="true"
    :width="500"
    :height="400"
    :controls-prev-html="'&#10092; '"
    :controls-next-html="'&#10093;'"
    :controls-width="150"
    :controls-height="100"
  >
    <Slide
      v-for="(item, index) in response.data"
      :key="index"
      :index="index"
      class="slide"
    >
      <div>
        <h2>{{ item.displayName }}</h2>
        <p>{{ item.coordinates }}</p>
      </div>
      <img :src="item.splash" alt="map images" class="map-images" />
      <hr />
    </Slide>
  </Carousel3d>
</template>

<style scoped>
.map-section-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.home-link {
  position: absolute;
  color: white;
  text-decoration: none;
  padding: 25px;
}

.carousel-container {
  position: relative;
  top: 150px;
}

.slide {
  width: 650px;
  height: 550px;
}
div {
  display: flex;
  flex-direction: column;
}

h2 {
  color: black;
  text-align: center;
  padding: 5px;
}

p {
  color: black;
  padding-left: 10px;
}

.map-images {
  width: 650px;
}
</style>
