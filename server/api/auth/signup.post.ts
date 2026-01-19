export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, password } = body

  // TODO: Replace with actual signup logic
  // This is a mock implementation
  if (name && email && password) {
    return {
      user: {
        id: '1',
        name: name,
        email: email,
        avatar: ''
      },
      token: 'mock-jwt-token-' + Date.now()
    }
  }

  throw createError({
    statusCode: 400,
    message: 'Invalid signup data'
  })
})
