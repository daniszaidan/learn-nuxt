<template>
  <p>detail posts page {{ $route.params.id }}</p>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>
