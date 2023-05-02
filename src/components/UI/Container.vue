<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem;
}

@media (width <= 43.75em) {
  .container {
    max-width: 95%;
    margin: 0 auto;
    padding: 0.5rem;
  }
}
</style>
