import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestao-requeima-inventario',
  templateUrl: './gestao-requeima-inventario.component.html',
  styleUrls: ['./gestao-requeima-inventario.component.scss']
})
export class GestaoRequeimaInventarioComponent implements OnInit {

  produtosForm: FormGroup;
  // Trocar por matrícula
  selectProdutos:string[] = [
    "P210", "P21", "P760", "P76", "P111", "P11", "P750", "P75"
  ];
  selectStatus:string[] = [
    "Retorno","Retrabalho","Padrão"
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.produtosForm = this.fb.group({
      sku: ['', Validators.compose([Validators.required])],
      qtdPecasCarro: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])],
      observacao: ['', Validators.compose([Validators.required])],
    })
  }
}
