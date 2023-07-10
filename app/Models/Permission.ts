import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Permission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public scope: string

  @column({ columnName: 'can_access' })
  public canAccess: boolean

  @column({ columnName: 'role_id' })
  public roleId: number | null

  @column({ columnName: 'route_id' })
  public routeId: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
