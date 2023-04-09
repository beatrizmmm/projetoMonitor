import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestao-forno-processo-cabine',
  templateUrl: './gestao-forno-processo-cabine.component.html',
  styleUrls: ['./gestao-forno-processo-cabine.component.scss']
})
export class GestaoFornoProcessoCabineComponent implements OnInit {


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
