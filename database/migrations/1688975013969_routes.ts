import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'routes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('pattern').notNullable()
      table.string('handler').unique().notNullable()

      table.datetime('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.datetime('updated_at', { useTz: true }).defaultTo(this.raw('now() on update now()')).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
