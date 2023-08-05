import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { RoleTypes } from '../Enumerables'

const ROLE_ATTRIBUTES = ['id', 'name', 'alias', 'type']

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public alias: string

  @column()
  public type: RoleTypes

  @column({ columnName: 'is_visible' })
  public isVisible: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static findAll(): Promise<Role[]> {
    return this.query().select(ROLE_ATTRIBUTES).where('isVisible', true).exec()
  }

  public static getById(id: number): Promise<Role | null> {
    return this.query().select(ROLE_ATTRIBUTES).where('isVisible', true).where('id', id).first()
  }

  public static updateById(id: number, data): Promise<number[]> {
    return this.query().where('isVisible', true).where('id', id).update(data)
  }

  public static deleteById(id: number): Promise<number[]> {
    return this.query().where('type', RoleTypes.DEFAULT).where('id', id).delete()
  }
}
