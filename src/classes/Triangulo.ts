// Crie uma classe que extende
  // de forma e tenha somente as dimensões modificadas
import { Forma } from "./Forma";

class Triangulo extends Forma {
  constructor(dimensoes: [number, number, number,]) {
    super("Triangulo", dimensoes, dimensoes.length);
  }

  public set dimensoes(dimensoes: [number,number,number]){
    this._dimensoes = dimensoes;
  }
}

export { Triangulo }