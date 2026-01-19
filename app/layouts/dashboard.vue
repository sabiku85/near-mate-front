<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppHeader />
    <div class="flex">
      <AppSidebar v-if="showSidebar" />
      <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup
        lang="ts">
        const route = useRoute()
        const showSidebar = computed(() => {
          return !route.path.startsWith('/auth')
        })
</script>
