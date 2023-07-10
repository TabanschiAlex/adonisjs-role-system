import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()

      table.string('name', 150).notNullable()
      table.string('email').notNullable()
      table.string('phone', 20).notNullable()
      table.string('type', 60).notNullable()
      table.string('password', 180).notNullable()
      table.string('state').notNullable()
      table.datetime('locked_until', { useTz: true }).nullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').notNullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
