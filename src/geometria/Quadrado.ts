import { Forma } from "./Forma";

class Quadrado extends Forma {
  constructor(dimensoes: [number, number, number, number]) {
    super(dimensoes);
  }

  public set dimensoes(dimensoes: [number, number, number, number]) {
    this._dimensoes = dimensoes;
  }
}

export { Quadrado };