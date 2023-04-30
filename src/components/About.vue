<template>
  <section class="about">
    <div class="about-grid">
      <div class="about-text">
        <div class="line line--first"></div>
        <div class="line line--second"></div>
        <div class="line line--third"></div>
        <div class="line line--forth"></div>
      </div>
      <div class="about-img"></div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.line {
  position: absolute;
  width: 0;
  height: 12px;
  // transform: scaleX(-1);
  z-index: 1;
}

.line--first {
  top: -12px;
  right: 0;

  background-color: red;
  animation: lineMovementFirst 1s ease-in-out forwards 1s;
}

.line--second {
  top: -12px;
  left: 0;
  width: 12px;
  height: 0;
  background-color: blue;
  animation: lineMovementSecond 1s ease-in-out forwards 1s;
}

.about {
  // box-sizing: content-box;
  min-height: 100vh;
  background-color: $background-color;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
}

.about-text {
  width: 500px;
  height: 500px;
  // background-color: red;
  position: relative;
  border: 12px solid transparent;
  z-index: 200;
}

.about-img::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  background-color: red;
  width: 0;
  height: 12px;
  transform: scaleX(-1);
  transform-origin: left;
  z-index: 1;
  animation: lineMovement 1s linear forwards;
}

.about-img {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: red;
  // justify-self: start;
}

@keyframes lineMovementFirst {
  0% {
  }
  100% {
    width: 100%;
  }
}
@keyframes lineMovementSecond {
  0% {
  }

  100% {
    height: 100%;
  }
}
@keyframes lineMovement {
  0% {
  }

  100% {
    width: 100%;
  }
}
</style>
