import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-catch',
  templateUrl: './try-catch.component.html',
  styleUrls: ['./try-catch.component.scss']
})
export class TryCatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.verificarPalindromo('Ana'))
    console.log(this.verificarPalindromo('cat'))
    console.log(this.tryCatchExample(''))
  }

  verificarPalindromo(text: string){
    if(!text){
      return "String inválida";
    }
    return text.toLowerCase() === text.split('').reverse().join('').toLowerCase();
  }
  verificarPalindromo2(text: string){
    if(!text)
      throw "String inválida";

    return text.toLowerCase() === text.split('').reverse().join('').toLowerCase();
  }

  tryCatchExample(text: string){
    try{
      this.verificarPalindromo(text);
    }catch(e){
      console.error(e);
    }
  }
}
