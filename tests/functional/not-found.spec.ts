import { test } from '@japa/runner'

test('page not found', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(404)
})
