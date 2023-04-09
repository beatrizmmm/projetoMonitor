import { Component, OnInit } from '@angular/core';
import { Pessoa } from '@app/models/identity/Pessoa';

@Component({
  selector: 'app-gestao-requeima-pessoas',
  templateUrl: './gestao-requeima-pessoas.component.html',
  styleUrls: ['./gestao-requeima-pessoas.component.scss']
})
export class GestaoRequeimaPessoasComponent implements OnInit {

  pessoa: Pessoa[] = [
    {nome:'Beatriz', presente: false}, {nome:'aberta', presente: false}, {nome:'atraia', presente: false}, {nome:'bateia', presente: false}, {nome:'abanai', presente: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
