<template>
  <div class="w-full">
    <UCard>
      <template #header>
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome Back
          </h1>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
      </template>

      <UForm :state="state" :schema="schema" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="you@example.com" size="lg" icon="i-lucide-mail" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="state.password" type="password" placeholder="••••••••" size="lg" icon="i-lucide-lock" />
        </UFormGroup>

        <div class="flex items-center justify-between">
          <UCheckbox v-model="state.remember" label="Remember me" />
          <NuxtLink to="/auth/forgot-password" class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400">
            Forgot password?
          </NuxtLink>
        </div>

        <UButton type="submit" block size="lg" color="primary" :loading="loading">
          Sign In
        </UButton>
      </UForm>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <NuxtLink to="/auth/signup" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
            Sign up
          </NuxtLink>
        </p>
      </div>

      <UAlert v-if="error" color="red" variant="soft" :title="error" class="mt-4" />
    </UCard>
  </div>
</template>

<script setup
        lang="ts">
        import { z } from 'zod'

        definePageMeta({
          layout: 'auth',
          middleware: 'auth'
        })

        const { login } = useAuth()
        const loading = ref(false)
        const error = ref<string | null>(null)

        const schema = z.object({
          email: z.string().email('Invalid email address'),
          password: z.string().min(6, 'Password must be at least 6 characters')
        })

        const state = reactive({
          email: '',
          password: '',
          remember: false
        })

        const onSubmit = async () => {
          loading.value = true
          error.value = null

          try {
            const result = await login(state.email, state.password)
            if (result.success) {
              await navigateTo('/dashboard')
          } else {
            error.value = result.error || 'Login failed'
          }
        } catch (err) {
          error.value = err instanceof Error ? err.message : 'An error occurred'
        } finally {
            loading.value = false
          }
        }
</script>
