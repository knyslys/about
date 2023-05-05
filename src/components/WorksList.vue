<template>
  <li
    :class="isSelected"
    @mouseenter="displayInfo(true)"
    @mouseleave="displayInfo(false)"
    v-if="windowWidth > 1000"
  >
    <div class="overlay" v-if="hovered && props.name === props.selectedWork">
      <span>{{ props.name }}</span>
      <a :href="props.site">Visit</a>
      <a :href="props.source">Source</a>
    </div>

    <div class="img-wrapper" @click="setWork">
      <img :src="props.img" :alt="props.name" />
    </div>
  </li>
  <!-- work gallery for mobile -->
  <li
    :class="isSelected"
    @mouseenter="displayInfo(true)"
    @mouseleave="displayInfo(false)"
    v-else
  >
    <div class="overlay" v-if="hovered">
      <a :href="props.site">Visit</a>
      <a :href="props.source">Source</a>
    </div>
    <div class="img-wrapper">
      <img :src="props.img" :alt="props.name" />
    </div>
  </li>
</template>

<script setup>
import { defineEmits, computed } from "vue";
import { ref, onMounted } from "vue";
const emit = defineEmits(["set-active-work"]);
const hovered = ref(false);
const windowWidth = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
const props = defineProps({
  framework: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  workActive: {
    type: Boolean,
  },
  selectedWork: {
    type: String,
  },
  site: {
    type: String,
  },
  source: {
    type: String,
  },
});

const setWork = () => {
  emit("set-active-work", props.name);
};

const isSelected = computed(() => {
  return {
    display: props.selectedWork && props.name === props.selectedWork,
    reduce: props.selectedWork && props.name !== props.selectedWork,
  };
});

const displayInfo = (val) => {
  hovered.value = val;
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.img-wrapper {
  border: 12px solid $background-color;
}
li {
  list-style: none;
  transition: 1s linear all;
  z-index: 100;
  position: relative;
  cursor: pointer;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($shade-color, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  span {
    font-size: 1rem;
    background-color: white;
    padding: 0.2rem;
    border-radius: 10px;
  }
  a {
    color: $background-color;
    text-decoration: none;
    transition: 0.6s all linear;
    &:hover {
      color: $attention-color;
    }
  }
}
img {
  max-width: 100%;
  display: block;
}
.display {
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translateY(-100%) translateX(50%) scale(2.5);
  margin: 0 auto;
  width: 20vw;
}
.reduce {
  transform: translateY(100%) scale(0.6);
  transition: 1s linear all;
}

@media (width <= 62.5em) {
  .overlay {
    font-size: 3rem;
  }
}
</style>
