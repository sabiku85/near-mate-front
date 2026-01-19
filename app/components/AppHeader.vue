<script setup lang="ts">
  interface Props {
    showEdit?: boolean
    showBack?: boolean
  }

  withDefaults(defineProps<Props>(), {
    showEdit: false,
    showBack: false
  })
</script>

<template>
  <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
    <div class="px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-lg font-semibold text-gray-900 dark:text-white">Logo | Nazwa aplikacji</span>
        </div>
        <UButton v-if="showEdit" variant="ghost" size="sm" icon="i-lucide-edit">
          Edytuj
        </UButton>
        <UButton v-if="showBack" variant="ghost" size="sm" icon="i-lucide-arrow-left" @click="$router.back()">
          Powrót
        </UButton>
      </div>
    </div>
  </header>
</template>
