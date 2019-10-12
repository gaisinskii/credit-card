<template>
  <base-page name="main">
    <h1 class="hehe">
      header is here main page
    </h1>
  </base-page>
</template>

<script>
import BasePage from '@/components/BasePage/BasePage.vue';

export default {
  components: {
    BasePage,
  },
};
</script>

<style lang="scss">
.page--main {
  background-color: red;
  .page {
  }
}
</style>
