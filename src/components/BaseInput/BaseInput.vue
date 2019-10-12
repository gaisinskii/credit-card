<template>
  <input
    v-bind="$attrs"
    :value="value"
    class="base-input"
    v-on="$listeners"
  >
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value'],
};
</script>

<style lang="scss">
.base-input {
  height: 42px;
  border: 1px solid #e4e9ee;
}
</style>
