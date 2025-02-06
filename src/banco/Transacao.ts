import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

function main() {
  const cliente = new Cliente(
    "Cezar",
    "cezar@email.com",
    new Date("1990-07-12")
  );

  cliente.setDocumento("123455234320");

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
  contaCorrente.updateSaldo(8, "C");

  contaCorrente.updateSaldo(110000, "D");

  try {
    contaCorrente.updateSaldo(8, "F");
  } catch (error) {
    throw error;
  }

  contaCorrente.getExtrato();
  console.log(`Saldo da conta corrente: ${contaCorrente.getSaldo()}`);
}

(() => {
  try {
    main();
  } catch (error) {
    console.log(error);
  }
})();