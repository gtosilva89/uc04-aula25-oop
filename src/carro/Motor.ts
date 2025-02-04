class Motor {
  private _nome: string;
  private _cilidradas: number;
  private _potencia: number;
  private _combustivel: string;
  private _cilindros: number;

  constructor(
    nome: string,
    cilidradas: number,
    potencia: number,
    combustivel: string,
    cilindros: number
  ) {
    this._nome = nome;
    this._cilidradas = cilidradas;
    this._potencia = potencia;
    this._combustivel = combustivel;
    this._cilindros = cilindros;
  }
}