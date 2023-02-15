<template>
  <v-app dark class="app">
    <v-app-bar color="black" fixed app class="app__bar bar">
      <div class="bar__logo">
        <div class="bar__img"></div>
      </div>
      <v-spacer></v-spacer>
      <div class="bar__nav nav">
        <div class="nav__item">Stocks</div>
        <div class="nav__item">Search</div>
        <div class="nav__item">Admin</div>
      </div>
      <div class="bar__actions">
        <v-btn>LogIn</v-btn>
        <v-btn>SingUp</v-btn>
      </div>
      <div class="bar__user"></div>
    </v-app-bar>
    <v-main class="nuxt-main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useStore } from '@nuxtjs/composition-api'
import { computed, watch } from 'vue'

const store = useStore()
const error = computed(() => {
  return store.getters['error/error']
})

watch(error, (value) => {
  console.log('watch');
  let message = ''
  switch (value) {
    case 401:
      message = 'Ошибка входа'
      break
    case 422:
      message = 'Ошибка входа'
      break
    default:
      break
  }
  console.log(message);
  if (message) {
    store.$toast.error(message)
    store.commit('error/SET_ERROR', 0)
  }
})
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  &__nav {
    flex: auto;
    display: flex;
  }
  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    background: gray;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
.nav {
  &__item {
    cursor: pointer;
    text-decoration: none;
    min-width: 100px;
    font-size: 24px;
    font-weight: bold;
    &:hover {
      transition: 0.5s ease-in-out;
      color: rgb(180, 211, 255);
    }
  }
}
</style>
