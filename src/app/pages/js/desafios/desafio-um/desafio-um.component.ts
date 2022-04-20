import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-um',
  templateUrl: './desafio-um.component.html',
  styleUrls: ['./desafio-um.component.scss']
})
export class DesafioUmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.desafio_one();
    // this.desafio_two();
    this.desafio_three();
  }

  desafio_one(){
    // let line = gets().split(" ");

    // let a = parseInt(line[0]);
    // let b = parseInt(line[1]);
    // let q = (a / b);
    // let r: number = a - b * q;

    // if(r < 0){
    //     r += Math.abs(b);
    //     q = (a - r) / b;
    // }

    // console.log(parseInt(q) + " " + parseInt(r));
  }

  desafio_two(){
    // let value = parseInt(gets());

    // for(let i = 1; i <= value; i++){
    //   let a, b;
    //   a = i * i;
    //   b = Math.pow(i, 3);

    //   console.log(i, a, b);
    // }
  }

  desafio_three(){
    // let value = parseInt(gets());
    let value = 400;

    let ano = 0;
    let mes = 0;
    let dia = 0;

    while(value >= 365){
      ano = Math.round(value / 365);
      value = value % 365;
    }

    while(value >= 30){
      mes = Math.round(value / 30);
      value = value % 30
    }

    while(value < 30){
      dia = value;
      value = value - dia;
    }

    let resultado = (ano + " ano(s) " + '\n' + mes +" mes(es)" + '\n' + dia + " dia(s)");
    console.log(resultado);
  }
}
