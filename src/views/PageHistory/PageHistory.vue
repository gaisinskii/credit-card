<template>
  <base-page name="history">
    <h1 class="page__heading">
      История платежей
    </h1>
    <h2 v-if="history.length <= 0">
      Платежи отсутствуют
    </h2>
    <div v-else>
      {{ history }}
    </div>
  </base-page>
</template>

<script>
import { mapState } from 'vuex';

import BasePage from '@/components/BasePage/BasePage.vue';

export default {
  components: {
    BasePage,
  },
  computed: {
    ...mapState(['history']),
  },
};
</script>

<style lang="scss">
.page--history {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
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
