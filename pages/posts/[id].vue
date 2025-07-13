<template>
  <h1 class="font-bold capitalize">{{ post?.title }}</h1>

  <p class="font-medium text-black/75 mt-5">
    {{ post?.body }}
    {{ post?.body }}
  </p>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data: post } = await useFetch(
  () => `https://jsonplaceholder.typicode.com/posts/${id}`,
  {
    pick: ['title', 'body'],
  }
);
</script>
