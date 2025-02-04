class Carro {
  private _marca: string;
  private _modelo: string;
  private _cor: string;
  private _ano: number;
  private _motor: Motor;
  private _transmissao: Transmissao;

  constructor(
    marca: string,
    modelo: string,
    cor: string,
    ano: number,
    motor: Motor,
    transmissao: Transmissao
  ) {
    this._marca = marca;
    this._modelo = modelo;
    this._cor = cor;
    this._ano = ano;
    this._motor = motor;
    this._transmissao = transmissao;
  }
}