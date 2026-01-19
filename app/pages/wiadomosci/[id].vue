<template>
  <div class="max-w-md mx-auto flex flex-col h-screen">
    <AppHeader :show-back="true" />

    <!-- Search in conversation -->
    <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="searchQuery" placeholder="Szukaj w rozmowie" icon="i-lucide-search" size="sm" />
    </div>

    <!-- Chat partner info -->
    <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div class="flex items-center space-x-3">
        <UAvatar :alt="chatPartner.name" size="md" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white">
            {{ chatPartner.name }}
          </h3>
          <p class="text-xs text-green-600 dark:text-green-400">
            Online
          </p>
        </div>
      </div>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      <div
v-for="message in messages" :key="message.id" class="flex"
        :class="message.sent ? 'justify-end' : 'justify-start'">
        <div
class="max-w-[80%] rounded-lg px-4 py-2" :class="message.sent
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'">
          <p class="text-sm">{{ message.text }}</p>
          <p class="text-xs mt-1" :class="message.sent ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'">
            {{ message.time }}
          </p>
        </div>
      </div>
    </div>

    <!-- Message Input -->
    <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div class="flex items-center space-x-2">
        <UInput
v-model="newMessage" placeholder="Napisz wiadomość..." size="lg" class="flex-1"
          @keyup.enter="sendMessage" />
        <UButton color="primary" icon="i-lucide-send" size="lg" :disabled="!newMessage.trim()" @click="sendMessage" />
      </div>
    </div>
  </div>
</template>

<script setup
        lang="ts">
        definePageMeta({
          layout: 'chat'
        })

        const searchQuery = ref('')
        const newMessage = ref('')

        const chatPartner = {
          name: 'SM Sylwia Markowska'
        }

        const messages = [
          {
            id: 1,
            text: 'Cześć, jesteś już?',
            time: '14:15',
            sent: true
          },
          {
            id: 2,
            text: 'Daj mi jeszcze kilka minut na dojazd, zaraz będę.',
            time: '14:16',
            sent: true
          },
          {
            id: 3,
            text: 'Czekam na Ciebie przed wejściem :)',
            time: '14:18',
            sent: false
          }
        ]

        const sendMessage = () => {
          if (newMessage.value.trim()) {
            messages.push({
              id: messages.length + 1,
              text: newMessage.value,
              time: new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
              sent: true
            })
            newMessage.value = ''
          }
        }
</script>
