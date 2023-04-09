import { Component, OnInit } from '@angular/core';
import { Pessoa } from '@app/models/identity/Pessoa';

@Component({
  selector: 'app-gestao-esmaltacao-pessoas',
  templateUrl: './gestao-esmaltacao-pessoas.component.html',
  styleUrls: ['./gestao-esmaltacao-pessoas.component.scss']
})
export class GestaoEsmaltacaoPessoasComponent implements OnInit {

  pessoa: Pessoa[] = [
    {nome:'Beatriz', presente: false}, {nome:'aberta', presente: false}, {nome:'atraia', presente: false}, {nome:'bateia', presente: false}, {nome:'abanai', presente: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
