<template>
  <div class="min-h-dvh flex flex-col">
    <Header />
    <h1>This is custom layout</h1>
    <main class="flex-1 p-3">
      <slot />
    </main>
    <Footer />
  </div>
</template>
