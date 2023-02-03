<template>
  <div class="comment">
    <div class="comment__avatar">
        <user-avatar :user="{src: 'https://i.playground.ru/p/js4QNoyBY8Q5IpqbQD-8jA.jpeg'}"></user-avatar>
    </div>
    <div class="comment__main main">
        <div class="main__username">Jerry</div>
        <div class="main__text">{{ comment.text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserAvatar from "../User/UserAvatar.vue";

const props = defineProps<{
    comment: CommentData
}>();
</script>

<style lang="scss" scoped>
.comment {
    display: flex;
    padding: 10px 15px;
    border-bottom: 1px solid gray;
    &__avatar {
        margin-right: 15px;
    }
}
.main {
    &__username {
        font-size: 22px;
        cursor: pointer;
        margin-bottom: 10px;
    }
}
</style>