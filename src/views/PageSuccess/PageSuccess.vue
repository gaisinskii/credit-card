<template>
  <base-page name="success">
    <h1 class="page__heading">
      Платеж успешно оплачен!
    </h1>
    <dl>
      <dt class="page__list-heading">
        Номер счета:
      </dt>
      <dd>{{ form.invoice }}</dd>

      <dt class="page__list-heading">
        Сумма платежа:
      </dt>
      <dd>{{ form.sum }}</dd>

      <dt class="page__list-heading">
        Имя держателя карты:
      </dt>
      <dd>{{ form.user }}</dd>

      <dt class="page__list-heading">
        Дата оплаты:
      </dt>
      <dd>{{ form.timestamp }}</dd>
    </dl>
  </base-page>
</template>

<script>
import BasePage from '@/components/BasePage/BasePage.vue';

export default {
  components: {
    BasePage,
  },
  data () {
    return {
      form: {},
    };
  },
  created () {
    if (this.$route.query.form) {
      this.form = this.$route.query.form;
    }
  },
};
</script>

<style lang="scss">
.page--success {
  height: 100%;
  background-color: $bg-white;
  padding: 80px 30px;
  .page {
    &__heading {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
    &__list-heading {
      font-weight: bold;
    }
  }
}
</style>
