import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mySet = new Set();
    mySet.add(1)
    mySet.add(5)

    mySet.has(5)

    mySet.delete(1)
  }

}
