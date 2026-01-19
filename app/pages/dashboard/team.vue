<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Team
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Manage your team members
        </p>
      </div>
      <UButton color="primary" size="lg" @click="showInviteModal = true">
        <Icon name="lucide:user-plus" class="w-5 h-5 mr-2" />
        Invite Member
      </UButton>
    </div>

    <UCard>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Member
              </th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Role
              </th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Status
              </th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
v-for="member in teamMembers" :key="member.id"
              class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
              <td class="py-4 px-4">
                <div class="flex items-center space-x-3">
                  <UAvatar :src="member.avatar" :alt="member.name" size="sm" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">
                      {{ member.name }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ member.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-4">
                <UBadge :color="member.role === 'Admin' ? 'purple' : 'gray'">
                  {{ member.role }}
                </UBadge>
              </td>
              <td class="py-4 px-4">
                <UBadge :color="member.status === 'Active' ? 'green' : 'yellow'">
                  {{ member.status }}
                </UBadge>
              </td>
              <td class="py-4 px-4">
                <div class="flex space-x-2">
                  <UButton color="gray" variant="ghost" size="sm" icon="i-lucide-edit" />
                  <UButton color="red" variant="ghost" size="sm" icon="i-lucide-trash" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </UCard>

    <UModal v-model="showInviteModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Invite Team Member</h3>
        </template>
        <UForm :state="inviteForm" class="space-y-4" @submit="inviteMember">
          <UFormGroup label="Email" name="email" required>
            <UInput v-model="inviteForm.email" type="email" size="lg" />
          </UFormGroup>
          <UFormGroup label="Role" name="role" required>
            <USelect v-model="inviteForm.role" :options="roleOptions" size="lg" />
          </UFormGroup>
          <div class="flex justify-end space-x-3">
            <UButton color="gray" variant="ghost" @click="showInviteModal = false">
              Cancel
            </UButton>
            <UButton type="submit" color="primary">
              Send Invite
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

        const showInviteModal = ref(false)

        const inviteForm = reactive({
          email: '',
          role: 'Member'
        })

        const roleOptions = ['Admin', 'Member', 'Viewer']

        const teamMembers = ref([
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            avatar: '',
            role: 'Admin',
            status: 'Active'
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            avatar: '',
            role: 'Member',
            status: 'Active'
          },
          {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            avatar: '',
            role: 'Member',
            status: 'Pending'
          }
        ])

        const inviteMember = async () => {
          // TODO: Implement invite API call
          showInviteModal.value = false
          inviteForm.email = ''
          inviteForm.role = 'Member'
        }
</script>
