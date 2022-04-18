import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-function',
  templateUrl: './filter-function.component.html',
  styleUrls: ['./filter-function.component.scss']
})
export class FilterFunctionComponent implements OnInit {

  array = [
    'maçã fuji',
    'maçã verde',
    'laranja',
    'abacaxi'
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.array.filter((fruta) => fruta.includes('maçã')));
    debugger;
  }

}
