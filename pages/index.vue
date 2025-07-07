<template>
  <div class="space-y-5">
    <h1>Blog Post App</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <Card v-for="post in posts" :key="post?.id" :post="post" />
    </div>

    <div v-show="!posts?.length">error load posts</div>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch(
  () => 'https://jsonplaceholder.typicode.com/posts'
);
</script>
