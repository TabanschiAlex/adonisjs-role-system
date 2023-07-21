import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules, validator } from '@ioc:Adonis/Core/Validator'

type Data = { id: number, description: string }

export default class RouteUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id: schema.number([ rules.required() ]),
    description: schema.string({}, [ rules.required() ]),
  })

  public messages: CustomMessages = {}

  public validate(data: Data) {
    return validator.validate({ schema: this.schema, data })
  }
}
