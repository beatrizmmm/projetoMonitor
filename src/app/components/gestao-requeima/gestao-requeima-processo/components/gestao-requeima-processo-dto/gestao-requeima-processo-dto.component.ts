import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestao-requeima-processo-dto',
  templateUrl: './gestao-requeima-processo-dto.component.html',
  styleUrls: ['./gestao-requeima-processo-dto.component.scss']
})
export class GestaoRequeimaProcessoDtoComponent implements OnInit {


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
