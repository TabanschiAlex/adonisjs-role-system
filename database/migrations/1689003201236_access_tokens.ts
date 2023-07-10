import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'access_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('token', 64).notNullable().unique()
      table.integer('user_id').unsigned().references('uuid').inTable('users').onDelete('CASCADE').notNullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
