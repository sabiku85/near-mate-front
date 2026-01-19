<script setup lang="ts">
  definePageMeta({
    layout: 'default'
  })

  const upcomingActivities = [
    {
      id: 1,
      title: 'Weekend Planszówek',
      date: 'Jutro',
      time: '9:00',
      location: 'Kawiarnia "Pożegnanie z Afryką"',
      participants: '6 osób',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Wspólny wypad na siłownię',
      date: 'Niedziela 21.08.2025',
      time: '14:00',
      location: 'Siłownia Olimpia',
      participants: '4 osoby',
      status: 'pending'
    }
  ]

  const newInvitations = [
    {
      id: 1,
      name: 'Aleksandra Jarr',
      mutualFriends: '3 wspólnych znajomych',
      interests: ['Fotografia', 'Podróżowanie']
    },
    {
      id: 2,
      name: 'Paulina Kowalska',
      mutualFriends: '10 wspólnych znajomych',
      interests: ['Gotowanie', 'Książki']
    }
  ]

  const suggestedActivities = [
    {
      id: 1,
      title: 'Nocne fotografowanie',
      spots: '3 wolne miejsca',
      date: '14.05.2025',
      location: 'Park przy zoo'
    },
    {
      id: 2,
      title: 'Partyjka squasha',
      spots: '1 wolne miejsce',
      date: '13.09.2025',
      location: 'Squash AGHS'
    }
  ]
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-6 space-y-6">
    <!-- Greeting Section -->
    <!-- <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
        Dzień dobry, Karolina!
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Jesteś gotowa na nowe znajomości?
      </p>
    </div> -->

    <UCard
      as="section"
      class="bg-radial-[at_90%_40%] from-white to-zinc-200 to-85%"
    >
      <h1 class="py-3 sm:py-6 text-lg font-semibold">
        Dzień dobry, Karolina! 👋
      </h1>
      <p class="text-sm">Jesteś gotowa na nowe znajomości?</p>

      <UButton
        label="Szukaj nowych znajomych"
        to="/szukaj"
        class="w-full justify-center mt-2 mb-3 sm:mt-4 sm:mb-6 font-normal"
      />
    </UCard>

    <!-- Search Button -->
    <!-- <UButton to="/szukaj" block size="xl" color="primary" class="bg-blue-700 hover:bg-blue-800">
      <Icon name="lucide:search" class="w-5 h-5 mr-2" />
      Szukaj nowych znajomych
    </UButton> -->

    <!-- Upcoming Activities -->
    <UCard
      as="section"
      class="mt-4"
    >
      <div class="flex items-center justify-between mb-3">
        <h2 class="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          <UIcon name="lucide:calendar" class="w-5 h-5 mr-2" />
          Nadchodzące aktywności
        </h2>
        <NuxtLink to="/aktywnosci" class="text-sm text-slate-600 dark:text-slate-400 hover:underline">
          Zobacz
        </NuxtLink>
      </div>
      <div class="space-y-3">
        <UCard v-for="activity in upcomingActivities" :key="activity.id" class="hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-between space-x-2 mb-2">
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  {{ activity.title }}
                </h3>
                <UBadge :color="activity.status === 'confirmed' ? 'success' : 'primary'" size="xs">
                  {{ activity.status === 'confirmed' ? 'potwierdzono' : 'oczekuje' }}
                </UBadge>
              </div>
              <p class="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                <UIcon name="lucide:calendar" class="w-4 h-4 mr-1" />
                {{ activity.date }}, {{ activity.time }}
              </p>
              <p class="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                <UIcon name="lucide:map-pin" class="w-4 h-4 mr-1" />
                {{ activity.location }}
              </p>
              <p class="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-500">
                <UIcon name="lucide:users" class="w-4 h-4 mr-1" />
                {{ activity.participants }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </UCard>

    <!-- New Invitations -->
    <UCard
      as="section"
      class="mt-4"
    >
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-semibold text-gray-900 dark:text-white">
          Nowe zaproszenia
        </h2>
        <NuxtLink to="/wiadomosci?tab=zaproszenia" class="text-sm text-slate-600 dark:text-slate-400 hover:underline">
          Zobacz wszystko
        </NuxtLink>
      </div>
      <div class="space-y-3">
        <UCard v-for="invitation in newInvitations" :key="invitation.id" class="hover:shadow-md transition-shadow">
          <div class="flex items-start space-x-3">
            <UAvatar :alt="invitation.name" size="md" class="shrink-0" />
            <div class="flex-1">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {{ invitation.name }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {{ invitation.mutualFriends }}
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <UBadge
v-for="interest in invitation.interests" :key="interest" color="neutral" variant="outline"
                  size="sm">
                  {{ interest }}
                </UBadge>
              </div>
              <div class="flex space-x-2">
                <UButton color="error" variant="outline" size="sm" block>
                  Odrzuć
                </UButton>
                <UButton color="primary" size="sm" block>
                  Akceptuj
                </UButton>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UCard>

    <!-- Suggested Activities -->
    <UCard
      as="section"
      class="mt-4"
    >
      <h2 class="font-semibold text-gray-900 dark:text-white mb-3">
        Aktywności proponowane dla Ciebie
      </h2>
      <div class="space-y-3">
        <UCard v-for="activity in suggestedActivities" :key="activity.id" class="hover:shadow-md transition-shadow">
          <div>
            <h3 class="flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {{ activity.title }}
              <UBadge size="sm" variant="outline" color="neutral">
                  {{ activity.spots}}
                </UBadge>
            </h3>
            <div class="space-y-1 mb-3">
              <!-- <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ activity.spots }}
              </p> -->
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ activity.date }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ activity.location }}
              </p>
            </div>
            <UButton color="primary" size="sm" block>
              Dołącz do aktywności
            </UButton>
          </div>
        </UCard>
      </div>
    </UCard>
  </div>
</template>
