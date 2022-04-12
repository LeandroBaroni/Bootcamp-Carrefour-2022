import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const erro = new Error('Mensagem inválida!')
    erro.name = 'invalidMessage';
    throw erro;
  }

}
