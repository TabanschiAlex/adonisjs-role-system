import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules, validator } from '@ioc:Adonis/Core/Validator'

type Data = { id: number, name: string, alias: string }

export default class RoleUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id: schema.number([ rules.required() ]),
    name: schema.string(),
    alias: schema.string({ trim: true }),
  })

  public messages: CustomMessages = {}

  public validate(data: Data) {
    return validator.validate({ schema: this.schema, data })
  }
}
