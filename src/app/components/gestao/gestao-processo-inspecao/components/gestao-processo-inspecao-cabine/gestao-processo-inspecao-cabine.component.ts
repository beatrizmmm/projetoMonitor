import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestao-processo-inspecao-cabine',
  templateUrl: './gestao-processo-inspecao-cabine.component.html',
  styleUrls: ['./gestao-processo-inspecao-cabine.component.scss']
})
export class GestaoProcessoInspecaoCabineComponent implements OnInit {

  cabineForm: FormGroup;
  selectCabine:number[] = [];

  constructor(
    private fb: FormBuilder,
  ) {
    for(let i = 1; i <= 13; i++) {
      this.selectCabine.push(i);
    }
  }

  ngOnInit(): void {

    this.cabineForm = this.fb.group({
      cabine: ['', Validators.compose([Validators.required])],
      bucha: ['', Validators.compose([Validators.required])],
      bigBoss: ['', Validators.compose([Validators.required])],
      lapis: ['', Validators.compose([Validators.required])],
      pirulito: ['', Validators.compose([Validators.required])],
      torno: ['', Validators.compose([Validators.required])],
      lampadas: ['', Validators.compose([Validators.required])],
      observacao: ['', Validators.compose([Validators.required])],
    })
  }

}
