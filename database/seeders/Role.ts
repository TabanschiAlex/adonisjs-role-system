import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import { RoleTypes } from '../../app/Enumerables'
import Role from '../../app/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        id: 1,
        name: 'Root',
        alias: 'root',
        type: RoleTypes.ROOT,
        isVisible: false,
      },
      {
        id: 2,
        name: 'Admin',
        alias: 'admin',
        type: RoleTypes.SYSTEM,
        isVisible: true,
      },
      {
        id: 3,
        name: 'Manager',
        alias: 'manager',
        type: RoleTypes.SYSTEM,
        isVisible: true,
      },
      {
        id: 4,
        name: 'User',
        alias: 'user',
        type: RoleTypes.DEFAULT,
        isVisible: true,
      },
    ])
  }
}
