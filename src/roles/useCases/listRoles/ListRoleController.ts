import { ListRolesUseCase } from "./ListRoleUseCase";
import { Request, Response } from "express";

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    // a variável page recebe o parâmetro de página e valida os valores recebidos.
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1;

    // a variável limit recebe o parâmetro de limite de roles por página e valida os valores recebidos.
    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15;
    const roles = await this.listRolesUseCase.execute({ page, limit });

    return response.status(200).json(roles);
  }
}
