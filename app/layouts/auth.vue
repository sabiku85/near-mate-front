<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <NuxtLink to="/" class="inline-flex items-center space-x-2">
          <Icon name="lucide:rocket" class="w-10 h-10 text-blue-600 dark:text-blue-400" />
          <span class="text-2xl font-bold text-gray-900 dark:text-white">Let's Go</span>
        </NuxtLink>
      </div>
      <slot />
    </div>
  </div>
</template>
