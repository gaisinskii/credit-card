<template>
  <base-page name="history">
    <h1 class="page__heading">
      История платежей
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
.page--history {
  height: 100%;
  background-color: $bg-white;
  padding: 80px 30px;
  .page {
    &__heading {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
}
</style>
