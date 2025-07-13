<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <h3 class="text-sm font-medium text-red-800">Error loading post</h3>
          <p class="text-sm text-red-700 mt-1">{{ blogStore.error }}</p>
        </div>
      </div>
      <div class="mt-4 flex space-x-3">
        <button 
          @click="retryFetch" 
          class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Try Again
        </button>
        <NuxtLink 
          to="/" 
          class="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back to Posts
        </NuxtLink>
      </div>
    </div>

    <!-- Post Content -->
    <article v-else-if="blogStore.currentPost" class="prose prose-lg max-w-none">
      <header class="mb-8">
        <nav class="mb-6" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <NuxtLink to="/" class="hover:text-blue-600 transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
            <li>
              <NuxtLink to="/" class="hover:text-blue-600 transition-colors">
                Posts
              </NuxtLink>
            </li>
            <li>
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
            <li class="text-gray-900 font-medium">
              Post #{{ blogStore.currentPost.id }}
            </li>
          </ol>
        </nav>

        <h1 class="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {{ blogStore.currentPost.title }}
        </h1>
        
        <div class="flex items-center text-sm text-gray-500 mb-6">
          <span>Post #{{ blogStore.currentPost.id }}</span>
          <span class="mx-2">•</span>
          <span v-if="blogStore.currentPost.userId">
            User #{{ blogStore.currentPost.userId }}
          </span>
        </div>
      </header>

      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <p class="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
          {{ blogStore.currentPost.body }}
        </p>
      </div>

      <footer class="mt-8 pt-8 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Posts
          </NuxtLink>
          
          <div class="flex space-x-4">
            <button 
              @click="sharePost"
              class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Share this post"
            >
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </footer>
    </article>

    <!-- Not Found State -->
    <div v-else class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">Post not found</h3>
      <p class="mt-1 text-sm text-gray-500">The post you're looking for doesn't exist.</p>
      <div class="mt-6">
        <NuxtLink 
          to="/" 
          class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Posts
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { useSeo } from '~/composables/useSeo';

// Route
const route = useRoute();
const postId = Number(route.params.id);

// Store
const blogStore = useBlogStore();

// SEO
const { setSeoMeta } = useSeo();

// Fetch post data
await blogStore.fetchPost(postId);

// Set SEO meta tags
if (blogStore.currentPost) {
  setSeoMeta({
    title: blogStore.currentPost.title,
    description: blogStore.currentPost.body.substring(0, 160) + '...',
    url: `/posts/${postId}`
  });
} else {
  setSeoMeta({
    title: 'Post Not Found',
    description: 'The requested post could not be found.',
    url: `/posts/${postId}`
  });
}

// Retry function for error handling
const retryFetch = async () => {
  await blogStore.fetchPost(postId);
};

// Share function
const sharePost = () => {
  if (navigator.share && blogStore.currentPost) {
    navigator.share({
      title: blogStore.currentPost.title,
      text: blogStore.currentPost.body.substring(0, 100) + '...',
      url: window.location.href
    });
  } else {
    // Fallback: copy URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
};

// Clean up on page leave
onBeforeUnmount(() => {
  blogStore.clearCurrentPost();
});
</script>
