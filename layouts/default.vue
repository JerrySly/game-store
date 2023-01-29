<template>
  <v-app dark class="app">
    <v-app-bar color="transparent" absolute fixed  app class="app__bar">
      <v-btn>Color</v-btn>
    </v-app-bar>
    <v-main>
        <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.app{
}
</style>