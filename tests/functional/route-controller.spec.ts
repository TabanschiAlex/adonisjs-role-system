import { test } from '@japa/runner'

test('unauthorized exception', async ({ client }) => {
  const response = await client.get('/api/routes')

  response.assertStatus(401)
})

test('get all routes', async ({ client }) => {
  const response = await client.get('/api/routes')

  response.assertStatus(200)
  response.assertBody([])
})
