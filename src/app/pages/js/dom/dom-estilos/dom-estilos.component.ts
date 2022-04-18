import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-estilos',
  templateUrl: './dom-estilos.component.html',
  styleUrls: ['./dom-estilos.component.scss']
})
export class DomEstilosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeAppearance(){

    const element = document.getElementById("element");
    console.log(element)
    if(element?.classList.contains("dark-mode")){
      element.classList.remove("dark-mode");
      element.classList.toggle("light-mode");
    }else{
      element?.classList.remove("light-mode");
      element?.classList.toggle("dark-mode");
    }
  }
}
