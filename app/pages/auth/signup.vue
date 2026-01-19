<template>
  <div class="w-full">
    <UCard>
      <template #header>
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Account
          </h1>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Sign up to get started with Let's Go
          </p>
        </div>
      </template>

      <UForm :state="state" :schema="schema" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Full Name" name="name" required>
          <UInput v-model="state.name" type="text" placeholder="John Doe" size="lg" icon="i-lucide-user" />
        </UFormGroup>

        <UFormGroup label="Email" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="you@example.com" size="lg" icon="i-lucide-mail" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="state.password" type="password" placeholder="••••••••" size="lg" icon="i-lucide-lock" />
        </UFormGroup>

        <UFormGroup label="Confirm Password" name="confirmPassword" required>
          <UInput
v-model="state.confirmPassword" type="password" placeholder="••••••••" size="lg"
            icon="i-lucide-lock" />
        </UFormGroup>

        <UCheckbox v-model="state.terms" label="I agree to the Terms and Conditions" required />

        <UButton type="submit" block size="lg" color="primary" :loading="loading">
          Create Account
        </UButton>
      </UForm>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
            Sign in
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

        const { signup } = useAuth()
        const loading = ref(false)
        const error = ref<string | null>(null)

        const schema = z.object({
          name: z.string().min(2, 'Name must be at least 2 characters'),
          email: z.string().email('Invalid email address'),
          password: z.string().min(6, 'Password must be at least 6 characters'),
          confirmPassword: z.string(),
          terms: z.boolean().refine(val => val === true, 'You must agree to the terms')
        }).refine(data => data.password === data.confirmPassword, {
          message: "Passwords don't match",
          path: ['confirmPassword']
        })

        const state = reactive({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          terms: false
        })

        const onSubmit = async () => {
          loading.value = true
          error.value = null

          try {
            const result = await signup(state.name, state.email, state.password)
            if (result.success) {
              await navigateTo('/dashboard')
          } else {
            error.value = result.error || 'Signup failed'
          }
        } catch (err) {
          error.value = err instanceof Error ? err.message : 'An error occurred'
        } finally {
            loading.value = false
          }
        }
</script>
