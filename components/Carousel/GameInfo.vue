<template>
  <div class="layout">
    <div class="layout__title">{{ props.item.name }}</div>
    <div class="layout__info info">
      <div class="info__desc">{{ props.item.description }}</div>
      <div class="info__price">
        <v-btn x-large>
            <v-icon>mdi-cart-outline </v-icon>{{ props.item.price }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: GameSlide
}>();
</script>

<style scoped lang="scss">
.layout {
    z-index: 2;
    height: 0px;
    &__title{
        position: absolute;
        font-size: 42px;
        top: 40px;
        left: 100px;
    }
}
.info {
    background: transparent !important;
    border:none;
    &__desc {
        position: absolute;
        font-size: 24px;
        top: 400px;
        left: 100px;
        max-width: 800px;
    }
    &__price{
        position: absolute;
        top: 120px;
        left: 100px;
    }

}
</style>
