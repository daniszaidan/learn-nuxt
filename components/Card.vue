<template>
  <article class="group">
    <NuxtLink
      :to="`/posts/${post.id}`"
      class="block transition-all duration-300 border border-gray-200 p-4 rounded-lg w-full cursor-pointer hover:bg-gray-50 hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      :aria-label="`Read post: ${post.title}`"
    >
      <h2 class="font-bold text-lg line-clamp-2 capitalize text-gray-900 group-hover:text-blue-600 transition-colors">
        {{ post.title }}
      </h2>
      <p class="font-normal line-clamp-3 mt-3 text-gray-600 leading-relaxed">
        {{ post.body }}
      </p>
      <div class="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Post #{{ post.id }}</span>
        <span class="group-hover:text-blue-600 transition-colors">Read more →</span>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { Post } from '~/types';

interface Props {
  post: Post;
}

defineProps<Props>();
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
