<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Settings
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        Manage your account settings and preferences
      </p>
    </div>

    <div class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Account Settings</h2>
        </template>

        <div class="space-y-4">
          <UFormGroup label="Email Notifications" name="emailNotifications">
            <UToggle v-model="settings.emailNotifications" />
          </UFormGroup>

          <UFormGroup label="Push Notifications" name="pushNotifications">
            <UToggle v-model="settings.pushNotifications" />
          </UFormGroup>

          <UFormGroup label="Marketing Emails" name="marketingEmails">
            <UToggle v-model="settings.marketingEmails" />
          </UFormGroup>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Security</h2>
        </template>

        <div class="space-y-4">
          <UFormGroup label="Current Password" name="currentPassword">
            <UInput v-model="passwordForm.currentPassword" type="password" size="lg" />
          </UFormGroup>

          <UFormGroup label="New Password" name="newPassword">
            <UInput v-model="passwordForm.newPassword" type="password" size="lg" />
          </UFormGroup>

          <UFormGroup label="Confirm New Password" name="confirmPassword">
            <UInput v-model="passwordForm.confirmPassword" type="password" size="lg" />
          </UFormGroup>

          <UButton color="primary" :loading="passwordLoading" @click="updatePassword">
            Update Password
          </UButton>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Danger Zone</h2>
        </template>

        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div>
              <h3 class="font-semibold text-red-900 dark:text-red-400">
                Delete Account
              </h3>
              <p class="text-sm text-red-700 dark:text-red-300">
                Once you delete your account, there is no going back. Please be certain.
              </p>
            </div>
            <UButton color="red" variant="soft" @click="showDeleteModal = true">
              Delete Account
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <UModal v-model="showDeleteModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Delete Account</h3>
        </template>
        <p class="mb-4">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <div class="flex justify-end space-x-3">
          <UButton color="gray" variant="ghost" @click="showDeleteModal = false">
            Cancel
          </UButton>
          <UButton color="red" @click="deleteAccount">
            Delete Account
          </UButton>
        </div>
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

        const settings = reactive({
          emailNotifications: true,
          pushNotifications: false,
          marketingEmails: false
        })

        const passwordForm = reactive({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        })

        const passwordLoading = ref(false)
        const showDeleteModal = ref(false)

        const updatePassword = async () => {
          passwordLoading.value = true
          // TODO: Implement password update API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          passwordLoading.value = false
        }

        const deleteAccount = async () => {
          // TODO: Implement account deletion
          showDeleteModal.value = false
        }
</script>
