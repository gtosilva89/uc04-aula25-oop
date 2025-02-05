class Cliente {
  private _nome: string;
  private _cpf: string;
  private _email: string;
  private _dataNascimento: Date;

  constructor(nome: string, cpf: string, email: string, dataNascimento: Date) {
    this._nome = nome;
    this._cpf = cpf;
    this._email = email;
    this._dataNascimento = dataNascimento;
  }
}

export { Cliente };