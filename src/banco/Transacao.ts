export class Transacao {
  private _valor: number;
  private _tipo: "C" | "D";
  private _dataHora: Date;

  constructor(valor: number, tipo: "C" | "D", dataHora: Date) {
    this._valor = valor;
    this._tipo = tipo;
    this._dataHora = dataHora;
  }

  public get valor() {
    return this._valor;
  }

  public get tipo() {
    return this._tipo;
  }

  public get dataHora() {
    return this._dataHora;
  }
}