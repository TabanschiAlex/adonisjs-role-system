import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export interface APIControllerMethods {
  index(ctx: HttpContextContract): Promise<void>

  create(ctx: HttpContextContract): Promise<void>

  edit(ctx: HttpContextContract): Promise<void>

  update(ctx: HttpContextContract): Promise<void>

  destroy(ctx: HttpContextContract): Promise<void>
}
