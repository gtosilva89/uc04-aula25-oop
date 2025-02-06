export abstract class Animal {
  constructor(protected _nome: string) {}

  // Método abstrato, que deve
  // ser implementado por quem
  // extender esta classe
  abstract emitirSom(): void;

  // Método concreto, ou seja,
  // é um método que já existe
  // na instancia filha de Animal
  public get nome() {
    return this._nome;
  }
}