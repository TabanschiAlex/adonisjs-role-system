import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  require('./routes/route.routes')
}).prefix('api')
