<template>
  <section id="introduction">
    <!-- <Particles id="tsparticles" url="http://foo.bar/particles.json" /> -->

    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        fpsLimit: 60,
        background: {
          color: '#e8e9e5',
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onclick: { enable: true, mode: 'push' },
            onhover: {
              enable: true,
              mode: 'repulse',
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            grab: { distance: 400, links: { opacity: 1 } },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: 'random' },
          links: {
            color: 'random',
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: 'none',
            enable: true,
            out_mode: 'out',
            random: false,
            speed: 3,
            straight: false,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 10,
              sync: false,
            },
          },
          number: { density: { enable: true, area: 1000 }, value: 50 },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 0.3,
          },
          shape: {
            character: [
              {
                fill: true,
                font: 'Raleway',
                style: '',
                value: '<>./;:*'.split(''),
                weight: '400',
              },
              {
                fill: false,
                font: 'Raleway',
                style: '',
                value: '<script>'.split(''),
                weight: '400',
              },
            ],
            image: {
              height: 100,
              replace_color: false,
              src: 'images/github.svg',
              width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: 'random', width: 1 },
            type: 'char',
          },
          size: {
            anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
            random: { minimumValue: 8, enable: true },
            value: 32,
          },
        },
        detectRetina: true,
      }"
    />
    <kinesis-container class="circle-container" event="move">
      <kinesis-element class="circle circle--blue"></kinesis-element>
      <kinesis-element class="circle circle--yellow"></kinesis-element>
      <kinesis-element class="circle circle--purple"></kinesis-element>
      <kinesis-element class="circle circle--grey"></kinesis-element>
      <kinesis-element class="circle circle--blue"></kinesis-element>
      <kinesis-element class="circle circle--blue"></kinesis-element>

      <kinesis-element tag="h1"
        ><kinesis-element :strength="windowWidth < 1000 ? 0 : 10" tag="span"
          >V</kinesis-element
        ><kinesis-element :strength="windowWidth < 1000 ? 0 : 12" tag="span"
          >A</kinesis-element
        ><kinesis-element :strength="windowWidth < 1000 ? 0 : 6" tag="span"
          >K</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 4" tag="span"
          >A</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 3" tag="span"
          >R</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 15" tag="span"
          >I</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 12" tag="span"
          >S</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 6" tag="span"
          >&nbsp</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 8" tag="span"
          >S</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 15" tag="span"
          >E</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 10" tag="span"
          >R</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 17" tag="span"
          >B</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 12" tag="span"
          >E</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 6" tag="span"
          >N</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 10" tag="span"
          >T</kinesis-element
        >
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 5" tag="span"
          >A</kinesis-element
        >
      </kinesis-element>

      <kinesis-element tag="span" v-observe-visibility="setNav">
        Front End developer, who codes with love and passion!
      </kinesis-element>
      <kinesis-element class="icon-container">
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 10">
          <Icon icon="ph:github-logo" class="icon" />
        </kinesis-element>
        <kinesis-element :strength="windowWidth < 1000 ? 0 : 5">
          <Icon
            icon="streamline:computer-logo-linkedin-network-linkedin-professional"
            class="icon"
          />
        </kinesis-element>
      </kinesis-element>
    </kinesis-container>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { loadFull } from "tsparticles";
import { useNavigation } from "../stores/navigation";
import { ref, onMounted } from "vue";
import Container from "./UI/Container.vue";
const nav = useNavigation();

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});

const particlesInit = async (engine) => {
  await loadFull(engine);
};
const setNav = (isVisible) => {
  if (isVisible) nav.setNavigation("home");
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
section {
  scroll-snap-align: start;
  overflow-x: hidden;
  text-align: center;
}
h1 span {
  font-size: 3rem;
  display: inline-block;
}
#tsparticles {
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -10;
}
.circle-container {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // position: absolute;
}
.circle {
  position: absolute;
  border-radius: 500%;
}
.circle--blue {
  background-color: rgba(75, 197, 211, 0.14);
  width: 12vw;
  height: 12vw;
  top: 32%;
  right: 0;
}
.circle--yellow {
  background-color: rgb(223, 196, 100, 0.14);
  width: 25vw;
  height: 25vw;
  top: -5%;
  left: -5%;
}
.circle--purple {
  background-color: rgb(167, 53, 115, 0.14);
  width: 14vw;
  height: 14vw;
  top: 50%;
  left: 30%;
}

.circle--grey {
  background-color: rgb(74, 80, 87, 0.14);
  // border: 20px solid rgb(74, 80, 87, 0.14);
  width: 5vw;
  height: 5vw;
  top: 23%;
  left: 55%;
}

.icon-container {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.icon-container div {
  background-color: $attention-color;
  border-radius: 500%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $background-color;
}
// .icon {
//   font-size: 1.6rem;
// }

@media (width <= 39.25em) {
  span {
    font-size: 1rem;
  }

  h1 span {
    font-size: 2rem;
  }
}
</style>
