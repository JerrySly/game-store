<template>
  <div class="main">
    <section class="main__head head">
      <game-carousel v-model="selectedGame" :items="items">
        <template #item-info>
          <game-info :item="items[selectedGame]"></game-info>
        </template>
      </game-carousel>
    </section>
    <section class="main__content content">
      <games-filter  class="content__filter"/>
      <div class="content__list">
        <game-card :game="game" v-for="game in games" :key="game.name"></game-card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GameCarousel from '~/components/Carousel/GameCarousel.vue'
import GameInfo from '~/components/Carousel/GameInfo.vue'
import GamesFilter from '~/components/Game/GamesFilter.vue'
import GameCard from '~/components/Game/GameCard.vue'

const games: Array<Game> = [
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
  {
    name: 'Just Cause 4',
    src: 'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg',
    description: 'ascasascqvqrv',
    price: 1200,
    rating: 4,
    simpleSrc:
      'https://i.pinimg.com/originals/ff/5e/8e/ff5e8e195702231cf9c34892918b8068.jpg',
  },
]

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
  &__content {
    padding: 20px 30px;
    display: flex;
  }
}
.content {
  &__filter {
    min-width: 400px;
    margin-right: 50px;
  }
  &__list{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
