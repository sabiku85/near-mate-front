<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Dashboard
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        Welcome back, {{ user?.name || 'User' }}!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <UCard class="hover:shadow-lg transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Projects</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">12</p>
            <p class="text-xs text-green-600 dark:text-green-400 mt-1">+2 from last month</p>
          </div>
          <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            <Icon name="lucide:folder" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </UCard>

      <UCard class="hover:shadow-lg transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Active Tasks</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">8</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">In progress</p>
          </div>
          <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <Icon name="lucide:check-circle" class="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
      </UCard>

      <UCard class="hover:shadow-lg transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Team Members</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">5</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Active members</p>
          </div>
          <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
            <Icon name="lucide:users" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </UCard>

      <UCard class="hover:shadow-lg transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Completed</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">24</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">This month</p>
          </div>
          <div class="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
            <Icon name="lucide:trophy" class="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
      </UCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Recent Activity</h2>
        </template>
        <div class="space-y-4">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Icon :name="activity.icon" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ activity.title }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ activity.time }}
              </p>
            </div>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Quick Actions</h2>
        </template>
        <div class="grid grid-cols-2 gap-4">
          <UButton to="/dashboard/projects" block color="primary" variant="soft" size="lg">
            <Icon name="lucide:plus" class="w-5 h-5 mr-2" />
            New Project
          </UButton>
          <UButton to="/dashboard/team" block color="gray" variant="soft" size="lg">
            <Icon name="lucide:user-plus" class="w-5 h-5 mr-2" />
            Add Member
          </UButton>
          <UButton to="/dashboard/analytics" block color="green" variant="soft" size="lg">
            <Icon name="lucide:bar-chart" class="w-5 h-5 mr-2" />
            View Analytics
          </UButton>
          <UButton to="/dashboard/settings" block color="purple" variant="soft" size="lg">
            <Icon name="lucide:settings" class="w-5 h-5 mr-2" />
            Settings
          </UButton>
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

        const { user } = useAuth()

        const recentActivities = [
          {
            id: 1,
            title: 'New project created',
            time: '2 hours ago',
            icon: 'lucide:folder-plus'
          },
          {
            id: 2,
            title: 'Task completed',
            time: '4 hours ago',
            icon: 'lucide:check-circle'
          },
          {
            id: 3,
            title: 'Team member added',
            time: '1 day ago',
            icon: 'lucide:user-plus'
          },
          {
            id: 4,
            title: 'Settings updated',
            time: '2 days ago',
            icon: 'lucide:settings'
          }
        ]
</script>
