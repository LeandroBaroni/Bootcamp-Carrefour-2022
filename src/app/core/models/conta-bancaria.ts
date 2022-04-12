class ContaBancaria{
  agencia: string = '';
  numero: number = 0;
  tipo: string = '';
  _saldo: number = 0;

  constructor(agencia: string, numero: number, tipo: string, saldo: number){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  getSaldo(){
    return this._saldo;
  }

  setSaldo(saldo: number){
    this._saldo = saldo;
  }

  sacar(saldo: number){
    if(saldo > this._saldo){
      return "Operação negada"
    }else{
      this._saldo = this._saldo - saldo;
      return this._saldo;
    }
  }

  depositar(valor: number){
    this._saldo = valor;
    return this._saldo;
  }
}
