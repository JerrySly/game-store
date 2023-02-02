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
    <v-footer :absolute="!fixed" app> </v-footer>
  </v-app>
</template>

<script>
export default {}
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
    &:hover{
      transition: 0.5s ease-in-out;
      color: rgb(180, 211, 255);
    }
  }
}
</style>
