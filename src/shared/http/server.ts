import "dotenv/config";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../swagger.json";
import { AppError } from "@shared/error/AppError";

const app = express();

//Cors permitir sites de diferente origens acessar a aplicação ou IP's selecionados
app.use(cors());
//Habilitar Uso JSON
app.use(express.json());
//Configurar e referenciar todas da aplicação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Tratamento de padrão erro
app.use(
  (error: Error, request: Request, reponse: Response, next: NextFunction) => {
    //Erro 400
    if (error instanceof AppError) {
      return reponse
        .status(error.statusCode)
        .json({ status: "error", message: error.message });
    }

    //Erro 500
    return reponse
      .status(500)
      .json({ status: "error 500", message: "Internal server error" });
  },
);

//Criação e uso PORT
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} 🚀`);
});
