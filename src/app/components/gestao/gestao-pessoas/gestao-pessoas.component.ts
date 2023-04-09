import { Pessoa } from './../../../models/identity/Pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestao-pessoas',
  templateUrl: './gestao-pessoas.component.html',
  styleUrls: ['./gestao-pessoas.component.scss']
})
export class GestaoPessoasComponent implements OnInit {

  pessoa: Pessoa[] = [
    {nome:'Beatriz', presente: false}, {nome:'aberta', presente: false}, {nome:'atraia', presente: false}, {nome:'bateia', presente: false}, {nome:'abanai', presente: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
