<template>
  <base-page name="history">
    <h1 class="page__heading">
      История платежей
    </h1>
    <h2 v-if="history.length <= 0">
      Платежи отсутствуют
    </h2>
    <div v-else>
      <div
        v-for="(item, index) in history"
        :key="index"
        class="page__item"
      >
        <div class="page__item-inner">
          <span class="page__item-heading">Номер счета:</span>
          {{ item.card }}
        </div>
        <div class="page__item-inner">
          <span class="page__item-heading">Цена:</span>
          {{ item.sum }}
        </div>
        <div class="page__item-inner">
          <span class="page__item-heading">Дата перевода:</span>
          {{ item.timestamp }}
        </div>
      </div>
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
    &__item {
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
    &__item-heading {
      font-weight: bold;
    }
  }
}
</style>
