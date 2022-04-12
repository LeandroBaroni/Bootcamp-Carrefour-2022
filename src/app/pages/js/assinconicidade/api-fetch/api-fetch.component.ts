import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-fetch',
  templateUrl: './api-fetch.component.html',
  styleUrls: ['./api-fetch.component.scss']
})
export class ApiFetchComponent implements OnInit {

  BASE_URL = 'https://thatcopy.pw/catapi/rest';

  catBtn = document.getElementById('change-cat');
  catImg = document.getElementById('cat');
  constructor() { }

  ngOnInit(): void {
    const getCats = async () => {
      try{
        const data = await fetch(this.BASE_URL);
        const json = await data.json();
        console.log(json);
        return json.webpurl;
      }catch(e: any){
        console.log(e.message);
      }
    }

    const loadImg = async () => {
      this.catImg = await getCats();
    }
  }

}
