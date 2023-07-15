import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import RouteService from '../../app/Services/RouteService'

export default class extends BaseSeeder {
  public async run() {
    await new RouteService().syncRoutes()
  }
}
