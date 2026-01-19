<template>
  <div class="max-w-md mx-auto px-4 py-6 space-y-4">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Poznaj nowych znajomych
    </h1>

    <!-- Search Bar -->
    <div class="flex space-x-2 mb-4">
      <UInput
v-model="searchQuery" placeholder="Szukaj po nazwie lub zainteresowaniu" icon="i-lucide-search" size="lg"
        class="flex-1" />
      <UButton color="gray" variant="outline" icon="i-lucide-filter">
        Filtruj
      </UButton>
      <UButton color="gray" variant="outline" icon="i-lucide-arrow-up-down">
        Sortuj
      </UButton>
    </div>

    <!-- User Profiles -->
    <div class="space-y-4">
      <UCard v-for="user in users" :key="user.id" class="hover:shadow-md transition-shadow">
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-3">
              <UAvatar :alt="user.name" size="lg" />
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  {{ user.initials }} {{ user.name }}, {{ user.age }} lat
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ user.distance }}
                </p>
              </div>
            </div>
            <div class="text-right">
              <div class="flex items-center space-x-1 text-yellow-500 mb-1">
                <Icon name="lucide:star" class="w-4 h-4 fill-current" />
                <span class="text-sm font-medium">{{ user.rating }}</span>
              </div>
              <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {{ user.match }}% dopasowanie
              </p>
            </div>
          </div>

          <p class="text-sm text-gray-700 dark:text-gray-300">
            {{ user.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <UBadge v-for="interest in user.interests" :key="interest" color="neutral" variant="soft" size="sm">
              {{ interest }}
            </UBadge>
          </div>

          <UButton color="primary" block size="lg">
            Wyślij zaproszenie
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup
        lang="ts">
        definePageMeta({
          layout: 'default'
        })

        const searchQuery = ref('')

        const users = [
          {
            id: 1,
            initials: 'SN',
            name: 'Sara Nowak',
            age: 40,
            distance: '2km',
            rating: '4.9',
            match: '92',
            description: 'Miłośniczka fotografii, szukam osób do wspólnych sesji zdjęciowych i wycieczek.',
            interests: ['Fotografia', 'Kawa', 'Podróże', 'Las']
          },
          {
            id: 2,
            initials: 'ER',
            name: 'Emilia Rokicka',
            age: 36,
            distance: '12km',
            rating: '4.9',
            match: '84',
            description: 'Zaczynam przygodę z jogą, szukam grupy do wspólnych ćwiczeń.',
            interests: ['Yoga', 'Czytanie', 'Kawa', 'Muzea']
          },
          {
            id: 3,
            initials: 'ER',
            name: 'Krystyna Budzisz',
            age: 32,
            distance: '12km',
            rating: '4.9',
            match: '74',
            description: 'Chcę zacząć chodzić na siłownię, szukam partnera do treningów.',
            interests: ['Fitness', 'Ćwiczenia']
          }
        ]
</script>
