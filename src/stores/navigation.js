import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigation = defineStore("navigation", () => {
  const currentSection = ref("home");
  const setNavigation = (value) => {
    currentSection.value = value;
  };

  return { currentSection, setNavigation };
});
