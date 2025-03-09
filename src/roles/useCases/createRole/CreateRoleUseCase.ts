import { RolesRepository } from "@roles/repositories/RolesRepository";
import { Role } from "@roles/entities/Role";
import { AppError } from "@shared/error/AppError";

type CreateRoleDTO = {
  name: string;
};

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadyExits = await this.rolesRepository.findByName(name);

    if (roleAlreadyExits) {
      throw new AppError("Role already exists", 400);
    }

    return this.rolesRepository.create({ name });
  }
}
