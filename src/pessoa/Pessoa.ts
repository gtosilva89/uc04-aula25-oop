class Pessoa {
  private _nome: string;
  private _idade: number;
  private _cpf: string;
  private _sexo: string;

  constructor(nome: string, idade: number, cpf: string, sexo: string) {
    this._nome = nome;
    this._idade = idade;
    this._cpf = cpf;
    this._sexo = sexo;
  }

  public get nome() {
    return this._nome;
  }

  public get idade() {
    return this._idade;
  }

  public get cpf() {
    return this._cpf;
  }

  public get sexo() {
    return this._sexo;
  }

  public set idade(idade: number) {
    this._idade = idade;
  }
}

export { Pessoa };