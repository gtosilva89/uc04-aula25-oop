class Cliente {
  private _tipoDocumento?: "CPF" | "CNPJ";
  private _documento?: string | number;

  constructor(
    private _nome: string,
    private _email: string,
    private _dataNascimento: Date
  ) {}

  // Declaro as assinaturas possíveis
  setDocumento(documento: string): void;
  setDocumento(documento: number): void;

  public setDocumento(documento: string | number): void {
    if (typeof documento === "string") {
      this._tipoDocumento = "CNPJ";
    } else {
      this._tipoDocumento = "CPF";
    }
    this._documento = documento;
  }

  public setCPF(documento: number) {
    this._tipoDocumento = "CPF";
    this._documento = documento;
  }
}

export { Cliente };