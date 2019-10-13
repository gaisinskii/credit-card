<template>
  <base-layout name="main">
    <aside>
      <nav class="layout__nav">
        <ul class="layout__list">
          <li
            v-for="(item, index) in nav"
            :key="index"
            class="layout__list-item"
          >
            <router-link
              :to="{ name: item.to }"
              class="layout__route"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="layout__main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue';

export default {
  components: {
    BaseLayout,
  },
  data() {
    return {
      nav: [
        {
          to: 'PageDummy1',
          name: 'Личный кабинет',
        },
        {
          to: 'PageMain',
          name: 'Платежи',
        },
        {
          to: 'PageHistory',
          name: 'История платежей',
        },
        {
          to: 'PageDummy2',
          name: 'Настройки',
        },
        {
          to: 'PageDummy3',
          name: 'Выйти',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.layout--main {
  display: flex;
  justify-content: center;
  padding: 80px 0;
  background-color: $bg-blue;
  .layout {
    &__main {
      width: 639px;
    }
    &__list {
      list-style: none;
    }
    &__list-item {
      width: 318px;
      &:not(:last-of-type) {
        border-bottom: 1px solid $border-sub;
      }
    }
    &__route {
      display: flex;
      padding: 25px 0px 26px 29px;
      font-size: 18px;
      font-family: "Open Sans";
      font-weight: bold;
      line-height: 24px;
      color: #fff;
      background-color: #191c24;
      text-decoration: none;
      &.router-link-exact-active {
        color: #808592;
        background-color: $border-sub;
      }
      &:hover {
        background-color: #1f2229;
        cursor: pointer;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
