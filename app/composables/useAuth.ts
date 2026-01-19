export const useAuth = () => {
  const user = useState<User | null>('user', () => null)
  const token = useState<string | null>('token', () => null)

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  const login = async (email: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      const response = await $fetch<{ user: User; token: string }>('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })

      token.value = response.token
      user.value = response.user

      // Store token in cookie for SSR
      const tokenCookie = useCookie('auth-token', {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        secure: true,
        sameSite: 'strict'
      })
      tokenCookie.value = response.token

      return { success: true }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed'
      return { success: false, error: message }
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      const response = await $fetch<{ user: User; token: string }>('/api/auth/signup', {
        method: 'POST',
        body: { name, email, password }
      })

      token.value = response.token
      user.value = response.user

      const tokenCookie = useCookie('auth-token', {
        maxAge: 60 * 60 * 24 * 7,
        secure: true,
        sameSite: 'strict'
      })
      tokenCookie.value = response.token

      return { success: true }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Signup failed'
      return { success: false, error: message }
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    const tokenCookie = useCookie('auth-token')
    tokenCookie.value = null
    navigateTo('/auth/login')
  }

  const checkAuth = async () => {
    const tokenCookie = useCookie('auth-token')
    if (tokenCookie.value && !token.value) {
      token.value = tokenCookie.value
      // TODO: Fetch user data from API
    }
  }

  return {
    user: readonly(user),
    token: readonly(token),
    isAuthenticated,
    login,
    signup,
    logout,
    checkAuth
  }
}

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}
