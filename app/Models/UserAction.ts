import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class UserAction extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ columnName: 'ip_address' })
  public ipAddress: string

  @column({ columnName: 'user_agent' })
  public userAgent: string | null

  @column({ columnName: 'user_id' })
  public userId: string | null

  @column({ columnName: 'route_id' })
  public routeId: string | null

  @column()
  public details: Record<string, string>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
