<template>
  <base-page name="main">
    <section class="page__section page__section--white">
      <header class="page__header">
        <h1 class="page__header-heading">
          Информация по оплате:
        </h1>
        <div class="page__header-block">
          <h3>
            Номер счета:
          </h3>
          <h3>
            Сумма платежа:
          </h3>
        </div>
        <div class="page__header-block">
          <input
            form="form"
            type="text"
            class="page__header-data"
            placeholder="87123658716587"
            required
          >
          <input
            form="form"
            type="text"
            class="page__header-data"
            placeholder="100 руб."
            required
          >
          <!-- <span class="page__header-data"> {{ randomCheck }}</span>
          <span class="page__header-data">{{ randomSum }} руб.</span> -->
        </div>
      </header>
      <form
        id="form"
        class="page__form"
        @submit.prevent="validateForm"
      >
        <h2 class="page__form-heading">
          Данные банковской карты
        </h2>
        <div class="page__form-block-wrapper">
          <div class="page__form-block page__form-block--front">
            <base-fieldset
              :has-legend="true"
              :legend-name="'Номер карты'"
              class="page__form-fieldset page__form-fieldset--number"
            >
              <base-input
                v-model="card1"
                type="text"
                required
                maxlength="4"
                class="page__form-input page__form-input--number"
              />
              <base-input
                v-model="card2"
                type="text"
                required
                maxlength="4"
                class="page__form-input page__form-input--number"
              />
              <base-input
                v-model="card3"
                type="text"
                required
                maxlength="4"
                class="page__form-input page__form-input--number"
              />
              <base-input
                v-model="card4"
                type="text"
                required
                maxlength="4"
                class="page__form-input page__form-input--number"
              />
            </base-fieldset>
            <base-fieldset
              :has-legend="true"
              :legend-name="'Срок действия'"
              class="page__form-fieldset page__form-fieldset--date"
            >
              <base-select
                v-model="form.month"
                :default-selected-value="form.month"
                :options="monthsArray"
              />
              <base-select
                v-model="form.year"
                :default-selected-value="form.year"
                :options="yearsArray"
              />
            </base-fieldset>
            <base-fieldset
              :has-legend="false"
              class="page__form-fieldset page__form-fieldset--user"
            >
              <base-input
                :value="form.user"
                type="text"
                placeholder="Держатель карты"
                required
                class="page__form-input page__form-input--user"
              />
            </base-fieldset>
          </div>
          <div class="page__form-block page__form-block--back">
            <div class="page__form-bar" />
            <base-fieldset
              :has-legend="true"
              :legend-name="'Код CVV2 / CVC2'"
              class="page__form-fieldset"
            >
              <base-input
                :value="form.user"
                type="text"
                required
                class="page__form-input page__form-input--ccv"
              />
            </base-fieldset>
          </div>
        </div>
        <button
          type="submit"
          class="page__form-btn"
        >
          Оплатить
        </button>
      </form>
    </section>
    <section class="page__section page__section--grey">
      <p class="page__paragraph">
        Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс. <br> <br>
        Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла. <br> <br>
        Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект. <br> <br>
        Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
      </p>
    </section>
  </base-page>
</template>

<script>
import BasePage from '@/components/BasePage/BasePage.vue';
import BaseInput from '@/components/BaseInput/BaseInput.vue';
import BaseFieldset from '@/components/BaseFieldset/BaseFieldset.vue';
import BaseSelect from '@/components/BaseSelect/BaseSelect.vue';

import yearsArray from '@/utils/years.json';
import monthsArray from '@/utils/months.json';

export default {
  components: {
    BasePage,
    BaseInput,
    BaseFieldset,
    BaseSelect,
  },
  data() {
    return {
      form: {
        month: '01',
        year: '2019',
        user: '',
      },
      formIsValid: true,
      card1: '',
      card2: '',
      card3: '',
      card4: '',
      yearsArray,
      monthsArray,
    };
  },
  computed: {
  },
  methods: {
    validateForm() {
      if (!this.validateCardNumberAmount(this.card1)) {
        console.log('alert');
      }
    },
    validateCardNumberAmount(number) {
      const regex = /^\d{4}$/;
      return regex.test(number);
    },
  },

};
</script>

<style lang="scss">
.page--main {
  .page {
    &__section--white {
      padding: 47px 46px 45px 29px;
      background-color: $bg-white;
      color: #8494ab;
    }
    &__section--grey {
      padding: 26px 45px 33px 29px;
      background-color: $bg-grey;
    }
    &__header {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 35px;
    }
    &__header-heading {
      flex-basis: 100%;
      margin-bottom: 23px;
    }
    &__header-block {
      display: flex;
      flex-direction: column;
    }
    &__header-data {
      color: #373c43;
      margin-left: 41px;
      background: transparent;
      border: none;
    }
    &__form-heading {
      font-family: "Open Sans", serif;
      font-weight: 900;
      font-size: 22px;
      line-height: 25.45px;
      color: #383d43;
      margin-bottom: 22px;
    }
    &__form-block-wrapper {
      position: relative;
    }
    &__form-block {
      position: relative;
      width: 350px;
      height: 248px;
      padding: 25px 15px 14px 15px;
      border: 1px solid #e4e9ee;
      background-color: $bg-white;
      border-radius: 10px;
      z-index: 2;
      &--back {
        position: absolute;
        width: 370px;
        right: 0;
        top: 20px;
        z-index: 1;
        .base-fieldset__legend {
          margin-left: auto;
          margin-right: 8px;
        }
        .base-fieldset__inner {
          display: flex;
          justify-content: flex-end;
        }
        .page__form-input--ccv {
          background: url("../../assets/images/question.png") #fff no-repeat
            center right 8px;
          width: 138px;
          padding-right: 37px;
        }
      }
    }
    &__form-input {
      &--number {
        width: 70px;
        &:not(:last-of-type) {
          margin-right: 9px;
        }
      }
      &--user {
        width: 100%;
      }
    }
    &__form-fieldset {
      &--number {
        margin-bottom: 17px;
      }
      &--date {
        margin-bottom: 12px;
      }
    }
    &__form-bar {
      height: 42px;
      margin: 0 -15px 19px -15px;
      background-color: #e4e9ee;
    }
    &__form-btn {
      padding: 9px 32px;
      font-family: "Open Sans", serif;
      font-weight: bold;
      font-size: 14px;
      border: none;
      border-radius: 20px;
      color: #fff;
      background-color: #005abf;
      background-image: linear-gradient(
        to top,
        rgba(37, 36, 35, 0.18) 0%,
        rgba(37, 36, 35, 0) 100%
      );
      margin-top: 40px;
      margin-left: 15px;
      &:hover {
        cursor: pointer;
      }
    }
    &__paragraph {
      color: #7f8591;
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>
