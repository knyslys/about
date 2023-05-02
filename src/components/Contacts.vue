<template>
  <section class="contacts">
    <div class="wave wave--1"></div>
    <div class="wave wave--2"></div>
    <container>
      <div class="img-wrapper">
        <img src="/images/raccoon.webp" alt="contact" />
      </div>
      <p v-observe-visibility="setNav">
        Feel free to contact me about various job offers and I will get in touch
        with you as soon as possible, I would gladly accept front-end developer
        junior or internership position!
      </p>

      <div class="contacts-info">
        <div class="contacts-info__col">
          <div class="icon-container">
            <Icon icon="material-symbols:phone-android-outline" class="icon" />
          </div>
          <span>+ 3706 2373 105</span>
        </div>
        <div class="contacts-info__col">
          <div class="icon-container">
            <Icon icon="ic:outline-email" class="icon" />
          </div>
          <span>vakaris.serbenta@outlook.com</span>
        </div>
      </div>
    </container>
  </section>
</template>

<script setup>
import Container from "./UI/Container.vue";
import { Icon } from "@iconify/vue";
import { useNavigation } from "../stores/navigation";
const nav = useNavigation();

const setNav = (isVisible) => {
  if (isVisible) nav.setNavigation("contacts");
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.contacts {
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  animation: colors 5s ease infinite;
  text-align: center;
  position: relative;

  .wave {
    position: absolute;
    bottom: calc(5vh - 100px);
    left: 0;
    width: 100%;
    height: 100px;
    &--1 {
      background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
      background-size: 1000px 100px;
      animation: waveFirst 5s linear infinite;
    }
    &--2 {
      background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
      background-size: 1000px 100px;
      animation: waveFirst 10s linear infinite reverse;
      height: 80px;
      opacity: 0.5;
    }
  }
}

@keyframes waveFirst {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position: 1000px;
  }
}

p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.contacts-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &__col {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .icon-container {
      background-color: $attention-color;
      border-radius: 500%;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $background-color;
    }
  }
}

.img-wrapper {
  border-radius: 10%;
  overflow: hidden;
  border: 12px solid $shade-color;
  width: clamp(15rem, 100%, 30rem);
  margin: 0 auto;
  img {
    display: block;
    max-width: 100%;
  }
}

@media (width <= 39.25em) {
  span {
    font-size: 1rem;
  }

  h1 span {
    font-size: 2rem;
  }
}

@media (width <= 62.5em) {
  .wave {
    bottom: -12vh !important;
  }
}
</style>
