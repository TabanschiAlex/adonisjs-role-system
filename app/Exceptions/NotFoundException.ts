import { Exception } from '@adonisjs/core/build/standalone'

import NotFoundCodes from './Codes/NotFoundCodes'

export default class NotFoundException extends Exception {
  constructor(name: keyof typeof NotFoundCodes) {
    const error = NotFoundCodes[name]
    super(error.message, error.status, error.code)
  }
}
