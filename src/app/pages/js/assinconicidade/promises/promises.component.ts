import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  resolved: any;
  constructor() { }

  ngOnInit(): void {
    this.funcao();
    console.log(this.resolved);
  }

  async funcao(){
    const myPromise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve('Resolvida');
      }, 200);
    });

    this.resolved = await myPromise.then((result)=> result + ' passando pelo then')
      .then((result) => result + ' e agora acabou!')
      .catch((err) => console.log(err.message));

      return this.resolved;
  }

}
