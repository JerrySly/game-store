<template>
  <div class="main">
    <section class="main__head head">
      <game-carousel v-model="selectedGame" :items="items">
        <template #item-info>
          <game-info :item="items[selectedGame]"></game-info>
        </template>
      </game-carousel>
    </section>
    <section class="main__content">
      <games-filter />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GameCarousel from '~/components/Carousel/GameCarousel.vue';
import GameInfo from '~/components/Carousel/GameInfo.vue';
import GamesFilter from '~/components/Game/GamesFilter.vue';


const imgs: Array<string> = [
  'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
  'https://i.playground.ru/p/js4QNoyBY8Q5IpqbQD-8jA.jpeg',
]
const items: Array<GameSlide> = [
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
  },
  {
    name: 'Cyberpunk',
    src: 'https://i.playground.ru/p/js4QNoyBY8Q5IpqbQD-8jA.jpeg',
    description: 'ascasascqvqrv',
    price: 1400,
  },
  {
    name: 'Watch Dogs 2',
    src: 'https://games.mail.ru/hotbox/content_files/news/2022/07/18/dffa96df35b84adeb4f0617c9af4fd6c.jpg',
    description: 'ascasascqvqrv',
    price: 2000,
  },
]
const selectedGame = ref(0)
</script>
<style lang="scss" scoped>
.main {
  &__content{
    padding: 20px 30px;
  }
}
</style>
