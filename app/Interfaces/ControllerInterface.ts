import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export interface APIControllerMethods {
  index(context: HttpContextContract): Promise<void>

  create(context: HttpContextContract): Promise<void>

  edit(context: HttpContextContract): Promise<void>

  update(context: HttpContextContract): Promise<void>

  destroy(context: HttpContextContract): Promise<void>
}
