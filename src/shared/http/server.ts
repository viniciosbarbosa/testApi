import "dotenv/config";
import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} 🚀`);
});
