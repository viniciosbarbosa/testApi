import { DataSource } from "typeorm";

import { Role } from "@roles/entities/Role";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
});
