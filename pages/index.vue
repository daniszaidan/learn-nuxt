<template>
  <div class="space-y-5">
    <h1
      class="transition-all duration-200 text-red-500 hover:hidden hover:text-blue-300"
    >
      Blog Post App
    </h1>

    <button class="bg-sky-500 hover:bg-sky-700">Save changes</button>

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
