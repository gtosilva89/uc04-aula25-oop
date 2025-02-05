import { Cliente } from "./Cliente";
import { Transacao } from "./Transacao";

class Conta {
  protected _numero: number;
  protected _agencia: number;
  protected _cliente: Cliente;
  protected _dataAberturaConta: Date;
  protected _saldo: number;
  private _tipo: string;
  protected _transacoes: Transacao[];

  constructor(
    numero: number,
    agencia: number,
    cliente: Cliente,
    dataAberturaConta: Date,
    tipo: string
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._cliente = cliente;
    this._dataAberturaConta = dataAberturaConta;
    this._tipo = tipo;
    this._saldo = 0;
    this._transacoes = [];

    this._transacoes.push(new Transacao(0, "C", new Date()));
  }

  public get tipo() {
    return this._tipo;
  }

  public updateSaldo(valor: number, operacao: "C" | "D") {
    switch (operacao) {
      case "C":
        this._saldo += valor;

        break;
      case "D":
        if (valor <= this._saldo) {
          this._saldo -= valor;
        } else {
          throw new Error("Saldo insuficiente");
        }
        break;
      default:
        throw new Error("Operaçao Inválida");
    }
    this._transacoes.push(new Transacao(valor, operacao, new Date()));
  }

  public getExtrato() {
    let saldo = 0;
    for (const t of this._transacoes) {
      const { valor, tipo, dataHora } = t;
      const nomeOperacao = tipo === "C" ? "Crédito" : "Débito";
      const valorOperacao = tipo === "C" ? valor : valor * -1;
      console.log(
        `Data: ${dataHora} - Operação: ${nomeOperacao} ------> R$ ${valorOperacao} `
      );
      saldo += valorOperacao;
    }
    console.log(`Saldo                 ------> R$ ${saldo} `);
  }
}
export { Conta };