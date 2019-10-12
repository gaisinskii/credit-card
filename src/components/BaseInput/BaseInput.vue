<template>
  <input
    v-bind="$attrs"
    :value="value"
    class="base-input"
    v-on="listeners"
  >
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value'],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
  methods: {
    updateValue(evt) {
      const { value } = evt.target;
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
.base-input {
  height: 42px;
  border: 1px solid #e4e9ee;
  padding: 0 15px;
  &::placeholder {
    color: #bec6cf;
  }
}
</style>
