<template>
  <div class="max-w-md mx-auto px-4 py-6 space-y-4">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Aktywności
        </h1>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Przeglądaj dostępne aktywności, grupy. Stwórz własne
        </p>
      </div>
      <UButton color="primary" icon="i-lucide-plus" size="lg">
        Create
      </UButton>
    </div>

    <!-- Search and Filters -->
    <div class="flex space-x-2 mb-4">
      <UInput v-model="searchQuery" placeholder="Szukaj" icon="i-lucide-search" size="lg" class="flex-1" />
      <UButton color="gray" variant="outline" icon="i-lucide-filter">
        Filtruj
      </UButton>
      <UButton color="gray" variant="outline" icon="i-lucide-arrow-up-down">
        Sortuj
      </UButton>
    </div>

    <!-- Tabs -->
    <UTabs v-model="selectedTab" :items="tabs" class="mb-4">
      <template #default="{ item }">
        <span class="truncate">{{ item.label }}</span>
      </template>
    </UTabs>

    <!-- Activities List -->
    <div class="space-y-4">
      <UCard v-for="activity in activities" :key="activity.id" class="hover:shadow-md transition-shadow">
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-2 mb-2">
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  {{ activity.title }}
                </h3>
                <UBadge :color="getStatusColor(activity.status)" size="sm">
                  {{ activity.status }}
                </UBadge>
              </div>
              <UBadge color="neutral" variant="soft" size="sm" class="mb-2">
                {{ activity.category }}
              </UBadge>
            </div>
          </div>

          <p class="text-sm text-gray-700 dark:text-gray-300">
            {{ activity.description }}
          </p>

          <div class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-2">
              <Icon name="lucide:calendar" class="w-4 h-4" />
              <span>{{ activity.date }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="lucide:map-pin" class="w-4 h-4" />
              <span>{{ activity.location }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="lucide:users" class="w-4 h-4" />
              <span>{{ activity.participants }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="lucide:user" class="w-4 h-4" />
              <span>{{ activity.organizer }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="lucide:tag" class="w-4 h-4" />
              <span>{{ activity.price }}</span>
            </div>
          </div>

          <UButton
:disabled="activity.status === 'Brak miejsc'"
            :color="activity.status === 'Brak miejsc' ? 'neutral' : 'primary'" block size="lg">
            {{ activity.status === 'Brak miejsc' ? 'Zarezerwowane' : 'Dołącz' }}
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
        const selectedTab = ref(0)

        const tabs = [
          { label: 'Wszystkie aktywności', value: 'all' },
          { label: 'Grupy', value: 'groups' },
          { label: 'Zapisane', value: 'saved' }
        ]

        const activities = [
          {
            id: 1,
            title: 'Weekendowy spacer po lesie',
            status: 'Otwarte',
            category: 'Outdoor',
            description: 'Relaksujący spacer po lesie, połączony z obserwacją przyrody.',
            date: '30.09.2024 g. 9:00',
            location: 'Centralny Park',
            participants: '6/8 uczestników',
            organizer: 'SM Sylwia Malinowska',
            price: 'Za darmo'
          },
          {
            id: 2,
            title: 'Coffee & Planszówki',
            status: 'Otwarte',
            category: 'Social',
            description: 'Spotkanie przy planszówkach i dobrej kawie.',
            date: '1.10.2024 g. 14:00',
            location: 'Bonjour Café',
            participants: '4/6 uczestników',
            organizer: 'MT Michał Trocki',
            price: '10 zł na kawę'
          },
          {
            id: 3,
            title: 'Fotograficzny spacer',
            status: 'Ostatnie miejsca',
            category: 'Kreatywne',
            description: 'Wspólne fotografowanie w plenerze.',
            date: '1.10.2024 g. 14:00',
            location: '',
            participants: '4/6 uczestników',
            organizer: 'ED Emilia Dudzik',
            price: 'Za darmo'
          },
          {
            id: 4,
            title: 'Włoska szkoła gotowania',
            status: 'Brak miejsc',
            category: 'Nauka',
            description: 'Nauka gotowania tradycyjnych włoskich potraw.',
            date: '3.10.2024 g. 18:00',
            location: 'Współkuchnia',
            participants: '12/12 uczestników',
            organizer: 'MR Marek Rol',
            price: '45 zł za osobę'
          }
        ]

        const getStatusColor = (status: string) => {
          if (status === 'Otwarte') return 'success'
          if (status === 'Ostatnie miejsca') return 'warning'
          if (status === 'Brak miejsc') return 'error'
          return 'primary'
        }
</script>
