import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { UserStates, UserTypes } from '../Enumerables'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public uuid: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public password: string

  @column()
  public type: UserTypes

  @column()
  public state: UserStates

  @column({ columnName: 'role_id' })
  public roleId: number

  @column.dateTime({ columnName: 'locked_until' })
  public lockedUntil: DateTime | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
