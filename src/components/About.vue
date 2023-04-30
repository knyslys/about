<template>
  <section class="about" ref="root">
    <container>
      <div class="about-grid">
        <div class="about-text">
          <div class="line" :class="{ 'line--first': drawLines }"></div>
          <div class="line" :class="{ 'line--second': drawLines }"></div>

          <p
            v-observe-visibility="test"
            style="--delay: 1s"
            v-animate-onscroll="'animate__animated fadeInDown'"
          >
            Hi, I'm a front end developer who loves coding and creating
            beautiful websites. Coding has been my passion since childhood, when
            I used to make game scripts and mods for fun. I was fascinated by
            how I could manipulate the game world with code and create new
            experiences for myself and others.
          </p>
          <p
            style="--delay: 3s"
            v-animate-onscroll="'animate__animated fadeInDown'"
          >
            Then I discovered web development and started learning PHP, which
            opened up a whole new world of possibilities for me. I enjoyed
            building dynamic and interactive websites with PHP and learning new
            skills and technologies along the way. However, life took an
            unexpected turn and I had to quit coding for a while. I became a
            truck driver, which was a very different and challenging career. I
            learned a lot from driving across the Europe and meeting different
            people, but I always missed coding and creating websites. I felt
            like something was missing in my life. That's why I decided to come
            back to coding, but this time as a front end developer.
          </p>
          <p
            style="--delay: 4s"
            v-animate-onscroll="'animate__animated fadeInDown'"
          >
            I wanted to focus on the visual and user interface aspects of web
            development, which I find very exciting and rewarding. I started
            learning HTML, CSS, JavaScript and other modern front end
            technologies, such as React/Vue. I also learned how to use tools
            like Git, NPM to improve my workflow and productivity. I'm very
            happy with my decision to come back to coding and become a front end
            developer. I feel like I have rediscovered my passion and purpose in
            life. I'm always eager to learn new things and improve my skills as
            a developer. I'm also looking forward to working on interesting
            projects and join a team that has others developers who share my
            enthusiasm for coding and web development.
          </p>
        </div>
        <div
          class="about-img"
          v-animate-onscroll="'animate__animated animate__slideInUp'"
        >
          <div class="line" :class="{ 'line--right': drawLines }"></div>
        </div>
      </div>
    </container>
  </section>
</template>
<script setup>
import "animate.css";
import Container from "./UI/Container.vue";
import { ref } from "vue";
const drawLines = ref(false);

const test = (isVisible) => {
  if (isVisible) drawLines.value = true;
};
</script>
<style lang="scss" scoped>
@import "../assets/variables.scss";

.line {
  position: absolute;
  width: 0;
  height: 12px;
  // transform: scaleX(-1);
  z-index: 1;
}

.fadeInDown {
  animation: fadeInLeft 1s linear;
  animation-fill-mode: backwards;
  animation-delay: var(--delay);
}

.line--first {
  top: -12px;
  right: 0;
  background-color: $shade-color;
  animation: lineMovementFirst 1s ease-in-out forwards 2s;
}

.line--second {
  top: -12px;
  left: 0;
  width: 12px;
  height: 0;
  background-image: linear-gradient(
    to bottom,
    $shade-color 5%,
    rgba(255, 0, 0, 0) 90%
  );
  animation: lineMovementSecond 1s ease-in-out forwards 5s;
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
p {
  font-size: 1.2rem;
}
.about-text {
  width: 500px;
  // height: 500px;
  // background-color: $shade-color;
  // overflow-x: hidden;
  position: relative;
  border: 12px solid transparent;
  z-index: 200;
  padding: 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.line--right {
  position: absolute;

  top: 0;
  left: 0;
  background-color: $shade-color;
  width: 0;
  height: 12px;
  transform: scaleX(-1);
  transform-origin: left;
  z-index: 1;
  animation: lineMovement 1s linear forwards 1s;
}

.about-img {
  position: relative;
  width: 400px;
  height: 400px;
  background-color: $shade-color;
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
