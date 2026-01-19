
<script setup lang="ts">
  const route = useRoute()

  const navigationItems = [
    { to: '/dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
    { to: '/dashboard/analytics', label: 'Analytics', icon: 'lucide:bar-chart' },
    { to: '/dashboard/projects', label: 'Projects', icon: 'lucide:folder' },
    { to: '/dashboard/team', label: 'Team', icon: 'lucide:users' },
    { to: '/dashboard/settings', label: 'Settings', icon: 'lucide:settings' }
  ]

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return route.path === '/dashboard'
    }
    return route.path.startsWith(path)
  }
</script>

<template>
  <aside
    class="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-4rem)] sticky top-16">
    <nav class="p-4 space-y-1">
      <NuxtLink 
        v-for="item in navigationItems" 
        :key="item.to" 
        :to="item.to"
        class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200"
        :class="isActive(item.to)
          ? 'bg-blue-50 text-fuchsia-600 dark:bg-fuchsia-900/20 dark:text-fuchsia-400 font-semibold shadow-sm'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'">
        <Icon :name="item.icon" class="w-5 h-5 flex-shrink-0" />
        <span class="font-medium">{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>
