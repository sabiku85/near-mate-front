<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Analytics
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        View your performance metrics and insights
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Performance Overview</h2>
        </template>
        <div class="h-64 flex items-center justify-center text-gray-400">
          <div class="text-center">
            <Icon name="lucide:bar-chart" class="w-16 h-16 mx-auto mb-4" />
            <p>Chart visualization will be here</p>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Recent Trends</h2>
        </template>
        <div class="h-64 flex items-center justify-center text-gray-400">
          <div class="text-center">
            <Icon name="lucide:trending-up" class="w-16 h-16 mx-auto mb-4" />
            <p>Trend chart will be here</p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup
        lang="ts">
        definePageMeta({
          layout: 'dashboard',
          middleware: 'auth'
        })
</script>
