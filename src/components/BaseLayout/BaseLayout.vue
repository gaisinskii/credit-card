<template>
  <div
    class="base-layout"
    :class="`layout--${name}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.base-layout {
  height: 100vh;
  width: 100vw;
}
</style>
