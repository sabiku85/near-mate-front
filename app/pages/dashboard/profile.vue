<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Profile
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        Manage your profile information
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <UCard class="lg:col-span-1">
        <div class="text-center">
          <UAvatar :src="user?.avatar" :alt="user?.name || 'User'" size="3xl" class="mx-auto mb-4" />
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ user?.name || 'User' }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            {{ user?.email }}
          </p>
          <UButton color="primary" variant="soft" class="mt-4">
            Change Avatar
          </UButton>
        </div>
      </UCard>

      <UCard class="lg:col-span-2">
        <template #header>
          <h2 class="text-xl font-semibold">Profile Information</h2>
        </template>

        <UForm :state="profileState" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Full Name" name="name">
            <UInput v-model="profileState.name" size="lg" />
          </UFormGroup>

          <UFormGroup label="Email" name="email">
            <UInput v-model="profileState.email" type="email" size="lg" />
          </UFormGroup>

          <UFormGroup label="Bio" name="bio">
            <UTextarea v-model="profileState.bio" :rows="4" placeholder="Tell us about yourself..." />
          </UFormGroup>

          <div class="flex justify-end space-x-3">
            <UButton color="gray" variant="ghost" @click="resetForm">
              Cancel
            </UButton>
            <UButton type="submit" color="primary" :loading="loading">
              Save Changes
            </UButton>
          </div>
        </UForm>
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
        const loading = ref(false)

        const profileState = reactive({
          name: user.value?.name || '',
          email: user.value?.email || '',
          bio: ''
        })

        const resetForm = () => {
          profileState.name = user.value?.name || ''
          profileState.email = user.value?.email || ''
          profileState.bio = ''
        }

        const onSubmit = async () => {
          loading.value = true
          // TODO: Implement profile update API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          loading.value = false
        }
</script>
