import Route from '@ioc:Adonis/Core/Route'

// todo add action tracking middleware
Route.resource('roles', 'RolesController')
  .only(['index', 'create', 'edit', 'update', 'destroy'])
  .middleware({
    '*': ['auth'],
  })
