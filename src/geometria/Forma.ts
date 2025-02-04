class Forma {
  private _nome: string;
  protected _dimensoes: number[];
  protected _lados: number;

  constructor(dimensoes: number[]) {
    this._dimensoes = dimensoes;
    this._lados = dimensoes.length;
    // definir o nome da forma pela quantidade de lados
    // use um método privado
    this._nome = this.getNomeForma();
  }

  public get nome() {
    return this._nome;
  }
  public get dimensoes() {
    return this._dimensoes;
  }

  public get lados() {
    return this._lados;
  }

  protected getNomeForma() {
    switch (this._lados) {
      case 3:
        return "Triângulo";
      case 4: // Quadrado e Retangulo
        const [lado1, lado2, lado3, lado4] = this._dimensoes;
        if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
          return "Quadrado";
        }
        // Retangulo
        // Losango
        else {
          return "Retângulo";
        }
      case 5:
        return "Pentágono";
      case 6:
        return "Hexágono";
      default:
        return "Forma desconhecida";
    }
  }
}

export { Forma };