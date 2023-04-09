import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestao-forno-processo-dto',
  templateUrl: './gestao-forno-processo-dto.component.html',
  styleUrls: ['./gestao-forno-processo-dto.component.scss']
})
export class GestaoFornoProcessoDtoComponent implements OnInit {


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
