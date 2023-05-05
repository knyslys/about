<template>
  <section class="works" :class="{ active: workIsActive }">
    <container>
      <!-- <div class="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div> -->
      <h2 class="title" v-if="!workIsActive">My works</h2>
      <ul v-observe-visibility="setNav">
        <works-list
          v-for="work in works"
          :key="work.name"
          :name="work.name"
          :framework="work.framework"
          :img="work.img"
          :site="work.site"
          :source="work.source"
          ref="target"
          :work-active="workIsActive"
          :selected-work="selectedWork"
          @set-active-work="setActiveWork"
        ></works-list>
      </ul>
    </container>
  </section>
</template>

<script setup>
import Container from "./UI/Container.vue";
import WorksList from "./WorksList.vue";
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useNavigation } from "../stores/navigation";
const selectedWork = ref(null);
const workIsActive = ref(false);
const target = ref(null);
const nav = useNavigation();
const works = [
  {
    framework: "vue",
    name: "Weather application",
    site: "https://stunning-dieffenbachia-f61a66.netlify.app/",
    source: "https://github.com/knyslys/vue-weather-prebuilt",
    img: "images/weather.webp",
  },
  {
    framework: "vue",
    name: "Bike designer",
    site: "https://golden-sprinkles-5ec21c.netlify.app/",
    source: "https://github.com/knyslys/bike-designer",
    img: "images/bike.webp",
  },
  {
    framework: "react",
    name: "Hedgehog gaming deals",
    site: "https://hilarious-maamoul-fdbbf4.netlify.app/",
    source: "https://github.com/knyslys/hedgehog-deals",
    img: "images/gaming.webp",
  },
  {
    framework: "none",
    name: "Orange food site",
    site: "https://serene-rugelach-2dde5f.netlify.app/",
    source: "https://github.com/knyslys/food-prebuild",
    img: "images/food.webp",
  },
  {
    framework: "none",
    name: "Renty",
    site: "https://fanciful-faun-287d7f.netlify.app/",
    source: "https://github.com/knyslys/Estate",
    img: "images/renty.webp",
  },
  {
    framework: "vue",
    name: "Color Generator",
    site: "https://github.com/knyslys/vue-palete",
    source: "https://github.com/knyslys/vue-palete",
    img: "images/gener.webp",
  },
];
const setActiveWork = (name) => {
  workIsActive.value = true;
  selectedWork.value = name;
};
const setNav = (isVisible) => {
  if (isVisible) {
    nav.setNavigation("works");
  }
};
// const resetWork = () => {
//   workIsActive.value = false;
//   selectedWork.value = null;
// };

onClickOutside(target, (e) => {
  workIsActive.value = false;
  selectedWork.value = null;
});
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.active {
  animation: test 1s linear forwards;
}
@keyframes test {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }
}

.title {
  color: $background-color;
  text-align: center;
  font-size: 3rem;
}
.works {
  min-height: 100vh;
  background-color: $shade-color;
  scroll-snap-align: start;
  position: relative;
  overflow-x: hidden;

  transition: 1s all linear;
}

ul {
  max-width: 100%;
  min-height: 100vh;
  display: flex;

  align-items: center;
  gap: 2rem;
}

.works {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@media (width <= 62.5em) {
  .title {
    margin-bottom: 2rem;
  }
  section {
    padding: 1rem 0;
  }
  ul {
    flex-direction: column;
  }
}
</style>
