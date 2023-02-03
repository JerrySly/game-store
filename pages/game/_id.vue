<template>
  <div class="game">
    <section class="game__main main">
      <div><v-img :src="src" class="main__img" /></div>
      <div class="main__actions actions">
        <v-btn block height="50" class="actions__buy"
          ><v-icon>mdi-cart-outline </v-icon>1200</v-btn
        >
      </div>
    </section>
    <section class="game__info information">
      <h2 class="information__title">JustCause</h2>
      <div class="information__created">
        <span class="information__prop">Release year:</span> 2012
      </div>
      <div class="information__tags">
        <span class="information__prop">Tags:</span>
        <v-chip v-for="tag in tags" :key="tag" label outlined>{{ tag }}</v-chip>
      </div>
      <div class="information__types">
        <span class="information__prop">Types:</span>
        <v-chip v-for="item in types" :key="item" label outlined>{{
          item
        }}</v-chip>
      </div>
      <div class="information__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Et egestas quis
        ipsum suspendisse ultrices gravida dictum fusce. Sed augue lacus viverra
        vitae congue eu consequat ac felis. Morbi tristique senectus et netus.
        Scelerisque in dictum non consectetur a erat. Facilisi etiam dignissim
        diam quis enim lobortis scelerisque fermentum. Risus feugiat in ante
        metus dictum at tempor commodo ullamcorper. Ac felis donec et odio
        pellentesque diam volutpat. Imperdiet dui accumsan sit amet nulla
        facilisi. Placerat vestibulum lectus mauris ultrices eros in.
        Pellentesque elit ullamcorper dignissim cras tincidunt.
        <br> 
        <br> 
        Ac auctor augue
        mauris augue neque gravida in. Ut etiam sit amet nisl purus in mollis.
        Molestie at elementum eu facilisis sed odio. Sagittis id consectetur
        purus ut faucibus pulvinar. Netus et malesuada fames ac turpis egestas
        maecenas pharetra. Libero nunc consequat interdum varius sit. Turpis
        egestas maecenas pharetra convallis posuere morbi. Auctor eu augue ut
        lectus arcu bibendum. Justo eget magna fermentum iaculis eu non diam
        phasellus vestibulum. Elementum integer enim neque volutpat ac
        tincidunt. Aenean vel elit scelerisque mauris pellentesque pulvinar
        pellentesque habitant. Lectus sit amet est placerat in egestas erat.
        Duis tristique sollicitudin nibh sit amet. At imperdiet dui accumsan sit
        amet nulla. In nulla posuere sollicitudin aliquam ultrices. Arcu
        bibendum at varius vel pharetra. Mi proin sed libero enim sed faucibus
        turpis. Risus ultricies tristique nulla aliquet enim tortor at.
        <br> 
        <br> At urna
        condimentum mattis pellentesque id nibh tortor. Nulla facilisi etiam
        dignissim diam quis enim lobortis. Senectus et netus et malesuada fames
        ac turpis. Quis ipsum suspendisse ultrices gravida dictum. Blandit massa
        enim nec dui. Amet nisl suscipit adipiscing bibendum est ultricies
        integer quis. Risus nullam eget felis eget. Tristique senectus et netus
        et malesuada fames ac turpis egestas. Et malesuada fames ac turpis
        egestas sed tempus urna. Ridiculus mus mauris vitae ultricies leo
        integer malesuada. In cursus turpis massa tincidunt dui ut ornare
        lectus. Leo integer malesuada nunc vel risus. Maecenas ultricies mi eget
        mauris pharetra et ultrices neque. Libero justo laoreet sit amet cursus
        sit amet dictum sit. Etiam non quam lacus suspendisse. Volutpat
        consequat mauris nunc congue. Volutpat lacus laoreet non curabitur
        gravida. Integer enim neque volutpat ac. Sagittis purus sit amet
        volutpat consequat mauris. Vel fringilla est ullamcorper eget nulla
        facilisi. Viverra nibh cras pulvinar mattis nunc sed. Felis eget velit
        aliquet sagittis id consectetur purus ut faucibus. Lacus viverra vitae
        congue eu consequat ac felis donec et. Mauris a diam maecenas sed enim.
        Turpis tincidunt id aliquet risus feugiat in ante metus dictum.
        Ultricies mi eget mauris pharetra et. Venenatis cras sed felis eget
        velit aliquet sagittis id consectetur. Commodo quis imperdiet massa
        tincidunt nunc pulvinar sapien. 
        <br> 
        <br>Ac tortor vitae purus faucibus. Egestas
        integer eget aliquet nibh praesent tristique magna. Dui vivamus arcu
        felis bibendum ut tristique. Sollicitudin aliquam ultrices sagittis orci
        a scelerisque purus semper. Velit egestas dui id ornare arcu odio. Nunc
        scelerisque viverra mauris in aliquam sem fringilla ut. Et tortor at
        risus viverra. Lorem ipsum dolor sit amet consectetur. Consectetur purus
        ut faucibus pulvinar elementum integer. Purus ut faucibus pulvinar
        elementum. Nisl rhoncus mattis rhoncus urna neque. Lobortis mattis
        aliquam faucibus purus in massa tempor.
        <br> 
        <br> Tellus rutrum tellus
        pellentesque eu tincidunt tortor. Ipsum dolor sit amet consectetur
        adipiscing elit pellentesque. Arcu risus quis varius quam. Est sit amet
        facilisis magna etiam tempor orci eu. Id leo in vitae turpis massa sed
        elementum tempus egestas. Id donec ultrices tincidunt arcu. Tempor
        commodo ullamcorper a lacus vestibulum sed arcu. A pellentesque sit amet
        porttitor eget dolor morbi. Turpis egestas integer eget aliquet nibh
        praesent. Interdum consectetur libero id faucibus nisl tincidunt eget
        nullam non. Gravida quis blandit turpis cursus in hac habitasse. Pretium
        vulputate sapien nec sagittis. Luctus accumsan tortor posuere ac ut
        consequat. Accumsan tortor posuere ac ut consequat semper viverra nam
        libero. Amet cursus sit amet dictum sit amet. Molestie a iaculis at erat
        pellentesque adipiscing commodo elit. A diam sollicitudin tempor id.
        Ultrices dui sapien eget mi proin sed. Duis at tellus at urna
        condimentum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
        massa. 
      </div>
      <div class="comments">
        <create-comment></create-comment>
        <comment-list></comment-list>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CreateComment from '~/components/Comments/CreateComment.vue';
import CommentList from '~/components/Comments/CommentList.vue';

const tags = ['COOP', 'ONLINE', 'SPLIT SCREEN']
const types = ['RPG', 'ACTION', 'STRATEGY']
const src =
  'https://portagame.ru/katalog/game/xbox-game/xboxone-just-cause-4_4.jpg'
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  padding: 30px 25px 30px;
  &__main {
    max-width: 500px;
    margin-right: 50px;
  }
}
.main {
  &__img {
    height: 700px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  &__actions {
    width: 100%;
  }
}
.actions {
  &__buy {
    font-size: 28px;
  }
}
.information {
  background-color: transparent !important;
  &__title {
    font-size: 40px;
  }
  &__prop {
    font-size: 18px;
    color: gray;
    margin-right: 15px;
  }
  &__created {
    margin-bottom: 20px;
  }
  &__tags {
    margin-bottom: 20px;
    .v-chip {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  &__types {
    margin-bottom: 20px;
    .v-chip {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  &__description{
    font-size: 18px;
  }
}
</style>
