<template>
  <v-card class="game">
    <v-img class="game__img" :src="props.game.simpleSrc"></v-img>
    <div class="game__filter"></div>
    <v-card-text class="game__name">{{ props.game.name }}</v-card-text>
    <div class="game__layout">
      <div class="game__price">
        <v-btn x-large>
          <v-icon>mdi-cart-outline </v-icon>{{ props.game.price }}
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { Game } from '~/types/Game'

const props = defineProps<{
  game: Game
}>()
</script>

<style scoped lang="scss">
.game {
  max-width: 300px;
  min-width: 300px;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  &__img {
    height: 400px;
  }
  &__filter {
    position: absolute;
    top: 0px;
    z-index: 1;
    height: 400px;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.439) 0%, #1e1e1e 90%);
  }
  &__name {
    font-size: 28px;
    text-align: center;
  }
  &__layout {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    opacity: 0;
    z-index: 3;
    &:hover {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
  }
  &__price {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
