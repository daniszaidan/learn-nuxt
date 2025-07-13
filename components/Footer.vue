<template>
  <footer class="bg-gray-900 text-white mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Blog App</h3>
          <p class="text-gray-300 text-sm">
            A modern blog application built with Nuxt 3, featuring TypeScript, 
            Pinia state management, and best practices for performance and accessibility.
          </p>
        </div>
        
        <div>
          <h4 class="text-md font-semibold mb-4">Navigation</h4>
          <nav class="space-y-2" aria-label="Footer navigation">
            <NuxtLink 
              to="/" 
              class="block text-gray-300 hover:text-white transition-colors text-sm"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="block text-gray-300 hover:text-white transition-colors text-sm"
            >
              About
            </NuxtLink>
          </nav>
        </div>
        
        <div>
          <h4 class="text-md font-semibold mb-4">Built With</h4>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>Nuxt 3</li>
            <li>TypeScript</li>
            <li>Pinia</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} Blog App. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component is self-contained, no additional logic needed
</script>
