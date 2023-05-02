<template>
  <ul>
    <li @click="scroll('home')">
      <div class="lining" :class="{ active: nav.currentSection === 'home' }">
        <Icon icon="material-symbols:home" class="nav-icon" />
      </div>
    </li>
    <li @click="scroll('about')">
      <div class="lining" :class="{ active: nav.currentSection === 'about' }">
        <Icon icon="mdi:about-circle-outline" class="nav-icon" />
      </div>
    </li>
    <li @click="scroll('works')">
      <div class="lining" :class="{ active: nav.currentSection === 'works' }">
        <Icon icon="mdi:web" class="nav-icon" />
      </div>
    </li>
    <li @click="scroll('contacts')">
      <div :class="{ active: nav.currentSection === 'contacts' }">
        <Icon icon="ic:baseline-perm-contact-calendar" class="nav-icon" />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useNavigation } from "../stores/navigation.js";
import Contacts from "./Contacts.vue";
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue";

const emits = defineEmits(["scrool-into-view"]);
const nav = useNavigation();
const scroll = (value) => {
  emits("scrool-into-view", value);
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
ul {
  list-style: none;
  position: fixed;
  top: 10vh;
  right: 1vw;
  color: $attention-color;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  div {
    width: 30px;
    height: 30px;
    background-color: $attention-color;
    border-radius: 500%;
    transition: 0.5s all ease-in;
    position: relative;
    border: 5px solid #000;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-icon {
      font-size: 1.4rem;
      color: #000;
    }
  }
  .lining::after {
    height: 100%;
    width: 5px;
    background-color: #000;
    top: 100%;
    transform: translateX(-50%);
    left: 50%;
    content: "";
    position: absolute;
  }
}

.active {
  background-color: $main-color;

  .nav-icon {
    font-size: 1.4rem;
    color: $background-color;
  }
}

@media (width <= 22.5em) {
  ul {
    top: 2.5vh;
  }
}
</style>
