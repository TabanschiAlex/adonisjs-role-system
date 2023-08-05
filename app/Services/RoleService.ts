import NotFoundException from '../Exceptions/NotFoundException'
import Role from '../Models/Role'

export default class RoleService {
  public getAll(): Promise<Role[]> {
    return Role.findAll()
  }

  public create(data): Promise<Role> {
    return Role.create(data)
  }

  public async getById(id: number): Promise<Role> {
    const role = await Role.getById(id)

    if (!role) {
      throw new NotFoundException('roleNotFound')
    }

    return role
  }

  public async update(id: number, data: Partial<Role>): Promise<void> {
    const [updated] = await Role.updateById(id, data)

    if (updated === 0) {
      throw new NotFoundException('roleNotFound')
    }
  }

  public async delete(id: number) {
    const [deleted] = await Role.deleteById(id)

    if (deleted === 0) {
      throw new NotFoundException('roleNotFound')
    }
  }
}
