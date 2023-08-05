import { inject } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { APIControllerMethods } from '../../Interfaces/ControllerInterface'
import RoleService from '../../Services/RoleService'
import RoleCreateValidator from '../../Validators/RoleCreateValidator'
import RoleUpdateValidator from '../../Validators/RoleUpdateValidator'

@inject(RoleService)
export default class RolesController implements APIControllerMethods {
  constructor(private readonly roleService: RoleService) {}

  public async index({ response }: HttpContextContract): Promise<void> {
    const roles = await this.roleService.getAll()

    return response.ok(roles)
  }

  public async create({ response, request }: HttpContextContract): Promise<void> {
    const data = request.validate(RoleCreateValidator)

    const newRole = await this.roleService.create(data)

    response.created(newRole)
  }

  public async edit({ request, response }: HttpContextContract): Promise<void> {
    const { id } = request.params()

    const role = await this.roleService.getById(id)

    response.ok(role)
  }

  public async update(context: HttpContextContract): Promise<void> {
    const { request } = context

    const { id } = request.params()
    const { name, alias } = request.body()

    const data = await new RoleUpdateValidator(context).validate({ id, name, alias })

    await this.roleService.update(id, data)

    return this.edit(context)
  }

  public async destroy({ request, response }: HttpContextContract): Promise<void> {
    const { id } = request.params()

    await this.roleService.delete(id)

    response.noContent()
  }
}
