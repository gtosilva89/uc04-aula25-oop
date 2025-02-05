import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const cliente = new Cliente(
  "Cezar",
  "123455234320",
  "cezar@email.com",
  new Date("1990-07-12")
);

const conta = new ContaCorrente(1233, 12311, cliente, new Date("2009-06-06"));

const contaPoupanca = new ContaPoupanca(
  1233,
  12311,
  cliente,
  new Date("2009-06-06")
);

contaPoupanca.updateSaldo(30, "C");

contaPoupanca.updateSaldo(20, "D");

const saldoPoupanca = contaPoupanca.getSaldo();
console.log(`Saldo conta poupanca: ${saldoPoupanca}`);

const contaCorrente = new ContaCorrente(
  1234,
  123123,
  cliente,
  new Date("2010-01-01")
);

contaCorrente.updateSaldo(20, "C");
console.log(`Saldo da conta corrente: ${contaCorrente.getSaldo()}`);

contaCorrente.updateSaldo(30, "D");
contaCorrente.updateSaldo(9.99, "C");
contaCorrente.getExtrato();
console.log(`Saldo da conta corrente: ${contaCorrente.getSaldo()}`);