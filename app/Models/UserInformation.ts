import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { UserInformationTypes } from '../Enumerables'

export default class UserInformation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: UserInformationTypes

  @column()
  public key: string

  @column()
  public value: string

  @column({ columnName: 'user_id' })
  public userId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
