import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IConta } from "./IConta";

class ContaSalario extends Conta implements IConta {
  constructor(
    numero: number,
    agencia: number,
    cliente: Cliente,
    dataAberturaConta: Date
  ) {
    super(numero, agencia, cliente, dataAberturaConta, "corrente");
  }

  public getSaldo(): number {
    return this._saldo;
  }
}

export { ContaSalario };