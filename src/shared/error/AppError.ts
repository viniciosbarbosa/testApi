export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  //Receber Message com erro e Define um Status code
  constructor(message: string, statusCode?: 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
