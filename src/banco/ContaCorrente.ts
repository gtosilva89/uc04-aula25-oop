import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IConta } from "./IConta";
import { Transacao } from "./Transacao";

class ContaCorrente extends Conta implements IConta {
  private _valorLimite: number;
  constructor(
    numero: number,
    agencia: number,
    cliente: Cliente,
    dataAberturaConta: Date
  ) {
    super(numero, agencia, cliente, dataAberturaConta, "corrente");
    this._valorLimite = 100;
  }

  public getSaldo(): number {
    return this._saldo + this._valorLimite;
  }

  public updateSaldo(valor: number, operacao: "C" | "D") {
    switch (operacao) {
      case "C":
        this._saldo += valor;
        break;
      case "D":
        if (valor <= this.
          _saldo) {
          this._saldo -= valor;
        } else if (valor <= this._saldo + this._valorLimite) {
          // saque = 20 e saldo = 10 e o limite = 100
          // descontar o valor do saldo
          let valorRestante = valor - this._saldo;
          this._saldo = 0;
          // diminuir do limite o restante do valor do saque
          this._valorLimite -= valorRestante;
        } else {
          throw new Error("Saldo insuficiente");
        }
        break;
      default:
        throw new Error("Operaçao Inválida");
    }
    this._transacoes.push(new Transacao(valor, operacao, new Date()));
  }
}

export { ContaCorrente };