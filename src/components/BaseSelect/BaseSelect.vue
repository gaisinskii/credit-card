<template>
  <select
    v-model="currentOption"
    class="base-select"
    @input="$emit('input', $event.target.value)"
  >
    <option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
      :selected="item[0]"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    defaultSelectedValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentOption: '',
    };
  },
  watch: {
    value(newValue) {
      this.currentOption = newValue;
    },
  },
  mounted() {
    this.currentOption = this.defaultSelectedValue;
  },
};
</script>

<style lang="scss">
.base-select {
}
</style>
