import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Route extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pattern: string

  @column()
  public handler: string

  @column()
  public description: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static deleteNonExistentRouteHandlers(routes: Route[]): Promise<number[]> {
    const condition = routes.map(route => route.handler)

    return this.query().whereNotIn('handler', condition).delete()
  }

  public static updateRouteDescription(id: number, description: string): Promise<number[]> {
    return this.query().where('id', id).update({ description })
  }
}
