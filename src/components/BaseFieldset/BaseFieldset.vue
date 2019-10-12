<template>
  <fieldset class="base-fieldset">
    <legend
      v-if="hasLegend"
      class="base-fieldset__legend"
    >
      {{ legendName }}
    </legend>
    <div class="base-fieldset__inner">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    hasLegend: {
      type: Boolean,
      default: true,
    },
    legendName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.base-fieldset {
  border: none;
  &__legend {
    margin-bottom: 5px;
  }
}
</style>
