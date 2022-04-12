import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade-pratica',
  templateUrl: './atividade-pratica.component.html',
  styleUrls: ['./atividade-pratica.component.scss']
})
export class AtividadePraticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const array = new Map()
    this.validArray(array, 3);
  }


  validArray(arr: any, num: number){
    try{
      if(!arr && !num){
        throw new ReferenceError('Envio os parametros');
      }
      if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
      if(typeof num !== 'number') throw new TypeError('num precisa ser do tipo number');

      if(arr.lenght !== num) throw new RangeError('Tamanho inválido');

      return arr;
    }catch(e){
      if(e instanceof ReferenceError){
        console.log("Reference error");
        console.log(e);
      }else if(e instanceof TypeError){
        console.log("type error");
        console.log(e);
      }else if(e instanceof Range){
        console.log("Range error");
        console.log(e);
      }else{
        console.log(e);
      }
    }
  }
}
