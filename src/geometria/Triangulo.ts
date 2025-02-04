import { Forma } from "./Forma";

class Triangulo extends Forma {
  // Crie uma classe que extende
  // de forma e tenha somente as dimensões modificadas
  constructor(dimensoes: [number, number, number]) {
    super(dimensoes);
  }

  public set dimensoes(dimensoes: [number, number, number]) {
    this._dimensoes = dimensoes;
  }

  public getTipo() {
    // desestruturação da tupla de dimensoes
    const [lado1, lado2, lado3] = this._dimensoes;
    // triangulo equilátero
    if (lado1 === lado2 && lado2 === lado3) {
      return "Equilátero";
    }
    // triangulo isosceles
    else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      return "Isosceles";
    }
    // triangulo escaleno
    else {
      return "Escaleno";
    }
  }
}

export { Triangulo };