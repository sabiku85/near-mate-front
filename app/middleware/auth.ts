export default defineNuxtRouteMiddleware((to, _from) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated.value && to.path.startsWith('/dashboard')) {
    return navigateTo('/auth/login')
  }

  if (isAuthenticated.value && to.path.startsWith('/auth')) {
    return navigateTo('/dashboard')
  }
})
