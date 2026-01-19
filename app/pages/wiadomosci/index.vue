<template>
  <div class="max-w-md mx-auto px-4 py-6 space-y-4">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Wiadomości
    </h1>

    <!-- Tabs -->
    <UTabs v-model="selectedTab" :items="tabs" class="mb-4">
      <template #default="{ item }">
        <div class="flex items-center space-x-2">
          <span class="truncate">{{ item.label }}</span>
          <UBadge v-if="item.badge" :value="item.badge" color="red" size="xs" />
        </div>
      </template>
    </UTabs>

    <!-- Search -->
    <UInput v-model="searchQuery" placeholder="Szukaj" icon="i-lucide-search" size="lg" class="mb-4" />

    <!-- Conversations or Invitations -->
    <div v-if="selectedTab === 0" class="space-y-2">
      <UCard
v-for="conversation in conversations" :key="conversation.id"
        class="hover:shadow-md transition-shadow cursor-pointer" @click="navigateTo(`/wiadomosci/${conversation.id}`)">
        <div class="flex items-center space-x-3">
          <UAvatar :alt="conversation.name" size="md" />
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-semibold text-gray-900 dark:text-white truncate">
                {{ conversation.name }}
              </h3>
              <span class="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
            {{ conversation.time }}
          </span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
              {{ conversation.lastMessage }}
            </p>
          </div>
          <UBadge v-if="conversation.unread" :value="conversation.unread" color="red" size="sm" class="flex-shrink-0" />
        </div>
      </UCard>
    </div>

    <div v-else class="space-y-2">
      <!-- Invitations list would go here -->
      <UCard v-for="invitation in invitations" :key="invitation.id" class="hover:shadow-md transition-shadow">
        <div class="flex items-center space-x-3">
          <UAvatar :alt="invitation.name" size="md" />
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
              {{ invitation.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {{ invitation.message }}
            </p>
            <div class="flex space-x-2">
              <UButton color="error" variant="outline" size="sm">
                Odrzuć
              </UButton>
              <UButton color="primary" size="sm">
                Akceptuj
              </UButton>
            </div>
          </div>
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
          { label: 'Rozmowy', value: 'conversations' },
          { label: 'Zaproszenia', value: 'invitations', badge: 2 }
        ]

        const conversations = [
          {
            id: 1,
            name: 'SM Sylwia Markowska',
            lastMessage: 'Czekam na Ciebie przed wejściem',
            time: '10:40',
            unread: 2
          },
          {
            id: 2,
            name: 'DC Dorota Czajkowska',
            lastMessage: 'Świetna jest właśnie planszówka!',
            time: '13:15',
            unread: null
          },
          {
            id: 3,
            name: 'GR Grupa fotograficzna',
            lastMessage: 'Maria: Pamiętajcie, aby zabrać wodę!',
            time: 'Wczoraj',
            unread: 3
          },
          {
            id: 4,
            name: 'ER Emilia Rosińska',
            lastMessage: 'Dzięki za wczoraj, do usłyszenia',
            time: '12.12.2024 12:45',
            unread: null
          }
        ]

        const invitations = [
          {
            id: 1,
            name: 'Aleksandra Jarr',
            message: 'Chce dołączyć do Twojej aktywności'
          }
        ]
</script>
