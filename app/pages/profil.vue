<template>
  <div class="max-w-md mx-auto px-4 py-6 space-y-6">
    <AppHeader :show-edit="true" />

    <!-- Tabs -->
    <UTabs v-model="selectedTab" :items="tabs" class="mb-4">
      <template #default="{ item }">
        <span class="truncate">{{ item.label }}</span>
      </template>
    </UTabs>

    <!-- Profile Tab -->
    <div v-if="selectedTab === 0" class="space-y-6">
      <!-- User Info -->
      <div class="text-center">
        <div class="relative inline-block mb-4">
          <UAvatar initials="JK" size="3xl" class="mx-auto" />
          <UButton color="gray" variant="outline" size="sm" class="absolute bottom-0 right-0">
            Zmień zdjęcie
          </UButton>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Joanna Kowalewska, 29
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Warszawa
        </p>
        <p class="text-sm text-gray-700 dark:text-gray-300 max-w-md mx-auto">
          Singielka, miłośniczka dobrej kawy. Szukam grupy do wspólnych ćwiczeń.
        </p>
      </div>

      <!-- Availability -->
      <UCard>
        <template #header>
          <h3 class="font-semibold text-gray-900 dark:text-white">Dostępność</h3>
        </template>
        <p class="text-gray-700 dark:text-gray-300">
          Pon-Pt 17:00-20:00
        </p>
      </UCard>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-4">
        <UCard>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900 dark:text-white">42</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Znajomi</p>
          </div>
        </UCard>
        <UCard>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Moje aktywności</p>
          </div>
        </UCard>
        <UCard>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900 dark:text-white">5</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Stworzone aktywności</p>
          </div>
        </UCard>
        <UCard>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900 dark:text-white">4.8</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Ocena</p>
          </div>
        </UCard>
      </div>

      <!-- Interests -->
      <UCard>
        <template #header>
          <h3 class="font-semibold text-gray-900 dark:text-white">Zainteresowania</h3>
        </template>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="interest in interests" :key="interest" color="blue" variant="soft" size="lg">
            {{ interest }}
          </UBadge>
        </div>
      </UCard>
    </div>

    <!-- Activities Tab -->
    <div v-if="selectedTab === 1">
      <p class="text-gray-600 dark:text-gray-400 text-center py-8">
        Twoje aktywności będą tutaj
      </p>
    </div>

    <!-- Settings Tab -->
    <div v-if="selectedTab === 2">
      <p class="text-gray-600 dark:text-gray-400 text-center py-8">
        Ustawienia będą tutaj
      </p>
    </div>
  </div>
</template>

<script setup
        lang="ts">
        definePageMeta({
          layout: 'default'
        })

        const selectedTab = ref(0)

        const tabs = [
          { label: 'Profil', value: 'profile' },
          { label: 'Aktywności', value: 'activities' },
          { label: 'Ustawienia', value: 'settings' }
        ]

        const interests = [
          'Fitness',
          'Fotografia',
          'Kawa',
          'Podróże',
          'Gry planszowe',
          'Gotowanie'
        ]
</script>
