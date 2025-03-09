import { rolesRouter } from "@roles/http/routes/roles.routes";
import { Router } from "express";

// Cria uma instância do Router para criarmos rotas alternativas
const routes = Router();

// Nas linhas abaixos configuramos os métodos da rota routes
routes.get("/", (_request, response) => {
  return response.status(200).json({ message: "Hello world" });
});

// Chama os serviços da rota routes
routes.use("/routes", rolesRouter);

export { routes };
