import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-function',
  templateUrl: './map-function.component.html',
  styleUrls: ['./map-function.component.scss']
})
export class MapFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const array = [1,2, 3,4,5];
    array.map((item)=> item * 2);
    console.log(array);

    const array1 = [1,2, 3,4,5];
    array1.forEach((item) => item * 2);
    console.log(array1);

  }

}
