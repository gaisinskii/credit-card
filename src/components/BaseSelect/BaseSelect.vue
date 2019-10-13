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
  height: 42px;
  border: 1px solid $border;
  padding: 0 37px 0 15px;
  appearance: none;
  background-color: #fff;
  background: url("../../assets/images/arrow.png") #fff no-repeat center right
    8px;
  &::-ms-expand {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
  }
}
</style>
