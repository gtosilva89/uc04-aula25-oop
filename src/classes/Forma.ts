class Forma {
  protected _nome: string;
  protected _dimensoes: number[];
  protected _lados: number;

  constructor(nome: string, dimensoes: number[], lados: number) {
    this._nome = nome;
    this._dimensoes = dimensoes;
    this._lados = lados;
  }

  public get nome() {
    return this._nome;
  }
  public get dimensoes() {
    return this._dimensoes;
  }

  public get lados() {
    return this._lados;
  }
}

export { Forma };