import { v4 as uudiv4 } from "uuid";

// Entidade que representará a tabela Role no banco
export class Role {
  id?: string;
  name: string;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uudiv4();
    }
  }
}
