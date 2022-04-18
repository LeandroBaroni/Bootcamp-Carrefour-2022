import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-um',
  templateUrl: './desafio-um.component.html',
  styleUrls: ['./desafio-um.component.scss']
})
export class DesafioUmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.desafio_one();
    this.desafio_two();
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
}
