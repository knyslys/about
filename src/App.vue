<template>
  <!-- <kinesis-container event="move" class="test">
    <kinesis-element :strength="10" class="circle left"></kinesis-element>

    <kinesis-element :strength="10" class="circle right"></kinesis-element>
  </kinesis-container> -->

  <main>
    <introduction></introduction>
    <about></about>
    <works></works>
  </main>
</template>

<script setup>
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Works from "./components/Works.vue";
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
  font-family: $font-family;
}
</style>
