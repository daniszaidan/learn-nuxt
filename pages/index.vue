<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
      <p class="text-lg text-gray-600">
        Discover our latest articles and insights
      </p>
    </header>

    <!-- Loading State -->
    <div v-if="blogStore.loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="blogStore.error" class="bg-red-50 border border-red-200 rounded-lg p-6">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Error loading posts</h3>
          <p class="text-sm text-red-700 mt-1">{{ blogStore.error }}</p>
        </div>
      </div>
      <button 
        @click="retryFetch" 
        class="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Try Again
      </button>
    </div>

    <!-- Posts Grid -->
    <div v-else-if="blogStore.posts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        v-for="post in blogStore.posts" 
        :key="post.id" 
        :post="post" 
        class="h-full"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">No posts found</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by creating your first blog post.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { useSeo } from '~/composables/useSeo';

// SEO
const { setSeoMeta } = useSeo();
setSeoMeta({
  title: 'Blog Posts',
  description: 'Discover our latest articles and insights on technology, development, and more.',
  url: '/'
});

// Store
const blogStore = useBlogStore();

// Fetch posts on page load
await blogStore.fetchPosts();

// Retry function for error handling
const retryFetch = async () => {
  await blogStore.fetchPosts();
};
</script>
