<template>
  <v-carousel
    v-model="selectedItem"
    hide-delimiters
    cycle
    @change="$emit('input', selectedItem)"
    height="700"
    class="carousel"
  >
    <div class="carousel__mask"></div>
    <slot name="item-info"></slot>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      active-class="carousel__item"
      exact-active-class="carousel__item_disable"
      :src="item.src"
      reverse-transition="true"
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineEmits(['update:modelValue']);
const props = defineProps<{
  items: Array<{
    src: string
  }>,
  value: number
}>();
const selectedItem = ref(props.value)
</script>

<style lang="scss" scoped>
.v-window-item {
  transition: 0.7s linear;
}
.carousel {
  position: relative;
  &__mask {
    position: absolute;
    z-index: 1;
    height: 700px;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.439) 0%, #121212 80%);
  }
  &__item {
    transition: 0.7s linear;
  }
}
</style>
