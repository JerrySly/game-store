<template>
  <div class="enter-block">
    <div>
      <v-textarea
        clearable
        class="enter-block__text"
        :placeholder="user ? 'Your comment' : 'You not authorized and can not send comments'"
        :disabled="!user"
        outlined
      ></v-textarea>
      <div class="enter-block__send">
        <v-btn block height="50" :disabled="!user">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";


const user = computed(() => {
  return false;
})
</script>

<style lang="scss" scoped>
.enter-block {
  min-height: 175px;
  &__text {
    min-height: 175px;
  }
  &__send {
    min-width: 100px;
    height: 100%;
  }
}
</style>
