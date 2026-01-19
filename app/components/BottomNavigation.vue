<script setup lang="ts">
  const route = useRoute()

  const navItems = [
    { to: '/', label: 'Home', icon: 'lucide:home' },
    { to: '/szukaj', label: 'Szukaj', icon: 'lucide:search' },
    { to: '/aktywnosci', label: 'Aktywności', icon: 'lucide:calendar' },
    { to: '/wiadomosci', label: 'Wiadomości', icon: 'lucide:message-circle', badge: null },
    { to: '/profil', label: 'Profil', icon: 'lucide:user' }
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return route.path === '/'
    }
    return route.path.startsWith(path)
  }
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50">
    <div class="flex justify-around items-center h-20 py-2">
      <NuxtLink 
        v-for="item in navItems" 
        :key="item.to" 
        :to="item.to"
        class="flex flex-col items-center justify-center flex-1 h-full transition-colors rounded-lg" :class="isActive(item.to)
          ? 'text-slate-200 bg-slate-800 dark:text-slate-800 dark:bg-slate-200'
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'">
        <div class="relative">
          <Icon :name="item.icon" class="w-6 h-6" />
          <UBadge v-if="item.badge" :value="item.badge" color="error" size="xs" class="absolute -top-2 -right-2" />
        </div>
        <span class="text-xs mt-1 font-medium">{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>
