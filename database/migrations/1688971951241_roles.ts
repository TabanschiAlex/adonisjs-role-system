import BaseSchema from '@ioc:Adonis/Lucid/Schema'

import { RoleTypes } from '../../app/Enumerables'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.string('alias').notNullable()
      table.enum('type', Object.values(RoleTypes)).notNullable()
      table.boolean('is_visible').defaultTo(true).notNullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
