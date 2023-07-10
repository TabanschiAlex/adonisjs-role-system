import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { ConfirmationTokenActions } from '../Enumerables'

export default class ConfirmationToken extends BaseModel {
  @column({ isPrimary: true })
  public uuid: string

  @column()
  public action: ConfirmationTokenActions

  @column()
  public token: string

  @column({ columnName: 'is_active' })
  public isActive: boolean

  @column({ columnName: 'user_id' })
  public userId: string

  @column.dateTime({ columnName: 'expires_at' })
  public expiresAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
