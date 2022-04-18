import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-function',
  templateUrl: './reduce-function.component.html',
  styleUrls: ['./reduce-function.component.scss']
})
export class ReduceFunctionComponent implements OnInit {

  array = [
    ''
  ]
  constructor() { }

  ngOnInit(): void {
    this.array.reduce((item) => item);
  }

}
