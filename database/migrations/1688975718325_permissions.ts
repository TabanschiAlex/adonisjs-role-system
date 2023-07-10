import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'permissions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('scope').defaultTo('all').notNullable()
      table.boolean('can_access').defaultTo(true).notNullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE').notNullable()
      table.integer('route_id').unsigned().references('id').inTable('routes').onDelete('CASCADE').notNullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()

      table.unique(['role_id', 'route_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
