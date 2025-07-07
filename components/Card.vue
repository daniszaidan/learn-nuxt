<template>
  <NuxtLink
    :to="`/posts/${post.id}`"
    class="transition-all duration-300 border border-gray-400 p-3 rounded-md w-full cursor-pointer hover:bg-gray-500"
  >
    <h1 class="font-bold line-clamp-1">{{ post.title }}</h1>
    <p class="font-normal line-clamp-3 mt-2 text-black/75">{{ post.body }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
