import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_actions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('uuid').primary()

      table.string('ip_address', 40).notNullable(),
      table.string('user_agent').nullable(),
      table.json('details').defaultTo({}).notNullable(),
      table.uuid('user_id').references('uuid').inTable('users').onDelete('SET NULL').nullable()
      table.integer('route_id').unsigned().references('id').inTable('routes').onDelete('SET NULL').nullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
