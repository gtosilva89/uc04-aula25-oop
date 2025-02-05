import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IConta } from "./IConta";

class ContaPoupanca extends Conta implements IConta {
  constructor(
    numero: number,
    agencia: number,
    cliente: Cliente,
    dataAberturaConta: Date
  ) {
    super(numero, agencia, cliente, dataAberturaConta, "poupanca");
  }

  public getSaldo(): number {
    return this._saldo;
  }
}

export { ContaPoupanca };