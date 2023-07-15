import { execSync } from 'child_process'

import Route from '../Models/Route'

export default class RouteService {
  public async syncRoutes(): Promise<void> {
    const filePath = '../../database/sources/routes.json'

    execSync('node ace list:routes --json > ./database/sources/routes.json')

    const file = require(filePath)
    const routes: Route[] = file.root.filter((route: Route) => route.handler !== 'Closure')

    await Route.deleteNonExistentRouteHandlers(routes)

    for (const route of routes) {
      const { handler, pattern } = route

      await Route.updateOrCreate({ handler, pattern }, { handler, pattern })
    }
  }

  public async updateRouteDescription(id: number, description: string) {
    await Route.updateRouteDescription(id, description)
  }
}
