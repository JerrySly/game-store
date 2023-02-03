<template>
  <div class="avatar">
    <v-img :src="user.src" class="avatar__img"></v-img>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  user: User
}>()
</script>

<style lang="scss" scoped>
.avatar {
  &__img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
}
</style>
