import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IConta } from "./IConta";
import { Transacao } from "./Transacao";

class ContaCorrente extends Conta implements IConta {
  private _valorLimite: number;
  private _saldoLimite: number;
  constructor(
    numero: number,
    agencia: number,
    cliente: Cliente,
    dataAberturaConta: Date
  ) {
    super(numero, agencia, cliente, dataAberturaConta, "corrente");
    this._valorLimite = 100;
    this._saldoLimite = this._valorLimite;
  }

  // Definição dos métodos com sobrecarga
  getSaldo(): number;

  getSaldo(comLimite: boolean): number;


  public getSaldo(comLimite?: boolean): number {
    if (comLimite) {
      return this._saldo + this._saldoLimite;
    }

    return this._saldo;
  }

  public get saldoLimite() {
    return this._saldoLimite;
  }

  public updateSaldo(valor: number, operacao: string) {
    switch (operacao) {
      case "C":
        this._saldo += valor;
        break;
      case "D":
        if (valor <= this._saldo) {
          this._saldo -= valor;
        } else if (valor <= this._saldo + this._saldoLimite) {
          // saque = 20 e saldo = 10 e o limite = 100
          // descontar o valor do saldo
          let valorRestante = valor - this._saldo;
          this._saldo = 0;
          // diminuir do limite o restante do valor do saque
          this._saldoLimite -= valorRestante;
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

export { ContaCorrente };