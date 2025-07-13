<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Go to homepage"
          >
            Blog App
          </NuxtLink>
        </div>
        
        <div class="flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/' }"
            aria-current="page"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/about' }"
            aria-current="page"
          >
            About
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Component is self-contained, no additional logic needed
</script>
