class Transmissao {
  private _modelo: string;
  private _tipo: string;
  private _quantidadeMarchas: number;

  constructor(modelo: string, tipo: string, quantidadeMarchas: number) {
    this._modelo = modelo;
    this._tipo = tipo;
    this._quantidadeMarchas = quantidadeMarchas;
  }
}