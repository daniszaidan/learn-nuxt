<template>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque,
    repellendus eveniet magnam, modi totam debitis ullam perspiciatis nostrum
    sunt et quis temporibus alias facilis dolorum quod doloribus provident
    molestiae?
  </p>

  <Card class="mt-5">
    <template #heading>Card Heading</template>
    <p>This is an auto-imported component</p>
  </Card>

  <!-- <BaseFooButton class="mt-5" /> -->
  <LazyBaseFooButton class="mt-5" />

  <div v-show="!posts?.length">error</div>
  <li v-for="item in posts" :key="item?.id">
    <!-- <NuxtLink to="{{ `/posts/${item?.id}` }}">{{ item?.title }}</NuxtLink> -->
    {{ item?.title }}
  </li>
</template>

<script setup>
// const { data: posts } = await useAsyncData('post', () =>
//   $fetch('https://jsonplaceholder.typicode.com/posts')
// );

const { data: posts } = await useFetch(
  () => 'https://jsonplaceholder.typicode.com/posts'
);

const { data: post1 } = await useFetch(
  () => 'https://jsonplaceholder.typicode.com/posts/1',
  {
    pick: ['id', 'title'],
  }
);

console.log('ssr post1', toRaw(post1.value));
</script>
