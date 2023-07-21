import { inject } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { APIControllerMethods } from '../../Interfaces/ControllerInterface'
import RouteService from '../../Services/RouteService'
import RouteUpdateValidator from '../../Validators/RouteUpdateValidator'

@inject(RouteService)
export default class RoutesController implements Pick<APIControllerMethods, 'index' | 'update' | 'create'> {
  constructor(private readonly routeService: RouteService) {}

  public async index({ response }: HttpContextContract): Promise<void> {
    const routes = await this.routeService.getAll()

    return response.ok(routes)
  }

  public async update(context: HttpContextContract): Promise<void> {
    const { response, request } = context

    const { id } = request.params()
    const { description } = request.body()

    const data = await new RouteUpdateValidator(context).validate({ id, description })
    await this.routeService.updateRouteDescription(data.id, data.description)

    return response.ok({ id, description })
  }

  public async create(ctx: HttpContextContract): Promise<void> {
    await this.routeService.syncRoutes()

    return this.index(ctx)
  }
}
