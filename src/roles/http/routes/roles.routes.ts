import { Router } from "express";

const rolesRouter = Router();

// Pega a instância em uso do repositório para efetuar as transações no banco de dados.
const roleRepository = roleRepository.getInstance();

// Método Post da Rota Roles
rolesRouter.post("/", (request, response) => {
  return;
});

// Método Get da Rota Roles
rolesRouter.get("/", (request, response) => {
  return listRolesController.handle(request, response);
});

// Método Get da Rota Roles que deve ser passado o nome de uma role como parâmetro
rolesRouter.get("/:name"),
  (request, response) => {
    const { name } = request.params;
    const role = roleRepository.findByName(name);
    return response.status(200).json(role);
  };
export { rolesRouter };
