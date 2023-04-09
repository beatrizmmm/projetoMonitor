import { Component, OnInit } from '@angular/core';
import { Pessoa } from '@app/models/identity/Pessoa';

@Component({
  selector: 'app-gestao-forno-pessoas',
  templateUrl: './gestao-forno-pessoas.component.html',
  styleUrls: ['./gestao-forno-pessoas.component.scss']
})
export class GestaoFornoPessoasComponent implements OnInit {

  pessoa: Pessoa[] = [
    {nome:'Beatriz', presente: false}, {nome:'aberta', presente: false}, {nome:'atraia', presente: false}, {nome:'bateia', presente: false}, {nome:'abanai', presente: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
