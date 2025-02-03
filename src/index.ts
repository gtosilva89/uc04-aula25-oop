import { Pessoa } from "./classes/Pessoa";
import { Forma } from "./classes/Forma";
import { Quadrado } from "./classes/Quadrado";
import { Triangulo } from "./classes/Triangulo";

const pessoa = new Pessoa("Cezar", 34, "12345678901", "M");

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cpf);
console.log(pessoa.sexo);

pessoa.idade = 35;

const forma1 = new Quadrado([1, 1, 1, 1]);
const forma2 = new Forma("Triangulo", [1, 2, 3], 3);
const triangulo = new Triangulo ([1,2,3])