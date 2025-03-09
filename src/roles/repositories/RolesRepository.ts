import { Role } from "@roles/entities/Role";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  //Variavel privada para o repositório de Roles
  private repository: Repository<Role>;
  //Cria uma variavel sem instanciar a classe
  private static INSTANCE: RolesRepository;

  private constructor() {
    this.repository = dataSource.getRepository(Role);
  }

  // Design Pattern Singleton
  // Para garantir que a aplicação use a instância que já foi criada em runtime
  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository();
    }

    return RolesRepository.INSTANCE;
  }

  // Método para criar uma Role no banco de dados.
  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = this.repository.create({ name });
    return this.repository.save(role);
  }

  findAll({ page, skip, take }) {}

  findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name });
  }

  // Salva uma role no banco
  async save(role: Role): Promise<Role> {
    return this.repository.save(role);
  }

  //Deleta uma role do banco
  async delete(role: Role): Promise<void> {
    await this.repository.remove(role);
  }

  async findById(id: string) {}
}
