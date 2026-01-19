export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  // TODO: Replace with actual authentication logic
  // This is a mock implementation
  if (email && password) {
    return {
      user: {
        id: '1',
        name: 'John Doe',
        email: email,
        avatar: ''
      },
      token: 'mock-jwt-token-' + Date.now()
    }
  }

  throw createError({
    statusCode: 401,
    message: 'Invalid credentials'
  })
})
