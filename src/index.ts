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

const quadrado = new Quadrado([1, 1, 1, 1]);
quadrado.dimensoes = [1, 2, 3, 4];

const forma2 = new Forma([1, 2, 3, 4]);
console.log(forma2.nome);

// Criação do objeto triangulo
const triangulo = new Triangulo([1, 2, 3]);

// Altera apenas a propriedade das dimensões
triangulo.dimensoes = [2, 2, 2];
console.log(triangulo.getTipo());

const trianguloIsosceles = new Triangulo([1, 2, 1]);
console.log(trianguloIsosceles.getTipo());

const trianguloEscaleno = new Triangulo([1, 2, 3]);
console.log(trianguloEscaleno.getTipo());

const motorE36 = new Motor("E36", 2990, 240, "Gasolina", 6);
const transmissao = new Transmissao("1234", "Automatico", 6);

const bmwM3 = new Carro("BMW", "M3", "Azul", 2005, motorE36, transmissao);