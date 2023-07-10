import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'confirmation_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()

      table.string('action', 60).notNullable()
      table.string('token').notNullable()
      table.boolean('is_active').defaultTo(true).notNullable()
      table.datetime('expires_at', { useTz: true }).notNullable()
      table.uuid('user_id').references('uuid').inTable('users').onDelete('CASCADE').notNullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()

      table.unique(['user_id', 'token'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
