import Route from '@ioc:Adonis/Core/Route'

// todo add action tracking middleware
Route.resource('routes', 'RoutesController')
  .only(['index', 'update', 'create'])
  .middleware({
    '*': ['auth'],
  })
