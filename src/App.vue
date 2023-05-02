<template>
  <!-- <kinesis-container event="move" class="test">
    <kinesis-element :strength="10" class="circle left"></kinesis-element>

    <kinesis-element :strength="10" class="circle right"></kinesis-element>
  </kinesis-container> -->

  <main>
    <navigation @scrool-into-view="scroll"></navigation>
    <introduction ref="home"></introduction>
    <about ref="about"></about>
    <works ref="works"></works>
    <contacts ref="contacts"></contacts>
  </main>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Works from "./components/Works.vue";
import Contacts from "./components/Contacts.vue";
import { ref } from "vue";

const contacts = ref(null);
const home = ref(null);
const works = ref(null);
const about = ref(null);

const scroll = (value) => {
  switch (value) {
    case "home":
      home.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    case "about":
      about.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    case "works":
      works.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    case "contacts":
      contacts.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
  }
};
</script>

<style lang="scss">
@import "./assets/variables.scss";

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
}
html {
  scroll-snap-type: y mandatory;
}
body {
  font-size: 62.5%;
  font-family: $font-family;
}
@media (width <= 43.75em) {
  body {
    font-size: 56.5%;
  }
}

@media (width <= 62em) {
  html {
    scroll-snap-type: none;
  }
}
</style>
