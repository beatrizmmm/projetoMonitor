import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestao-esmaltacao-processo-inspecao-dto',
  templateUrl: './gestao-esmaltacao-processo-inspecao-dto.component.html',
  styleUrls: ['./gestao-esmaltacao-processo-inspecao-dto.component.scss']
})
export class GestaoEsmaltacaoProcessoInspecaoDtoComponent implements OnInit {

  dtoForm: FormGroup;
  // Trocar por matrícula
  selectCabine:number[] = [];

  constructor(
    private fb: FormBuilder,
  ) {
    for(let i = 1; i <= 13; i++) {
      this.selectCabine.push(i);
    }
  }

  ngOnInit(): void {
    this.dtoForm = this.fb.group({
      processoRetirada: ['', Validators.compose([Validators.required])],
      peca: ['', Validators.compose([Validators.required])],
      carimbo: ['', Validators.compose([Validators.required])],
    })
  }

}
