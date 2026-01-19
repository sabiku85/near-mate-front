<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Manage your projects and tasks
        </p>
      </div>
      <UButton color="primary" size="lg" @click="showCreateModal = true">
        <Icon name="lucide:plus" class="w-5 h-5 mr-2" />
        New Project
      </UButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="project in projects" :key="project.id" class="hover:shadow-lg transition-shadow cursor-pointer">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">{{ project.name }}</h3>
            <UBadge :color="project.status === 'active' ? 'green' : 'gray'">
              {{ project.status }}
            </UBadge>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          {{ project.description }}
        </p>
        <div class="flex items-center justify-between text-sm text-gray-500">
          <span>{{ project.tasks }} tasks</span>
          <span>{{ project.dueDate }}</span>
        </div>
      </UCard>
    </div>

    <UModal v-model="showCreateModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Create New Project</h3>
        </template>
        <UForm :state="projectForm" class="space-y-4" @submit="createProject">
          <UFormGroup label="Project Name" name="name" required>
            <UInput v-model="projectForm.name" size="lg" />
          </UFormGroup>
          <UFormGroup label="Description" name="description">
            <UTextarea v-model="projectForm.description" :rows="3" />
          </UFormGroup>
          <div class="flex justify-end space-x-3">
            <UButton color="gray" variant="ghost" @click="showCreateModal = false">
              Cancel
            </UButton>
            <UButton type="submit" color="primary">
              Create
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script setup
        lang="ts">
        definePageMeta({
          layout: 'dashboard',
          middleware: 'auth'
        })

        const showCreateModal = ref(false)

        const projectForm = reactive({
          name: '',
          description: ''
        })

        const projects = ref([
          {
            id: 1,
            name: 'Project Alpha',
            description: 'Main project description',
            status: 'active',
            tasks: 5,
            dueDate: '2024-12-31'
          },
          {
            id: 2,
            name: 'Project Beta',
            description: 'Secondary project',
            status: 'active',
            tasks: 3,
            dueDate: '2024-12-15'
          },
          {
            id: 3,
            name: 'Project Gamma',
            description: 'Completed project',
            status: 'completed',
            tasks: 8,
            dueDate: '2024-11-30'
          }
        ])

        const createProject = async () => {
          // TODO: Implement project creation API call
          showCreateModal.value = false
          projectForm.name = ''
          projectForm.description = ''
        }
</script>
