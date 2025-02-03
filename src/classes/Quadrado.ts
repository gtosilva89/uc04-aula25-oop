import { Forma } from "./Forma";

class Quadrado extends Forma {
  constructor(dimensoes: [number, number, number, number]) {
    super("Quadrado", dimensoes, 4);
  }

  public set dimensoes(dimensoes: [number, number, number, number]) {
    this._dimensoes = dimensoes;
  }
}

export { Quadrado };