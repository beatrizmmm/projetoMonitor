import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestao-esmaltacao-produtos',
  templateUrl: './gestao-esmaltacao-produtos.component.html',
  styleUrls: ['./gestao-esmaltacao-produtos.component.scss']
})
export class GestaoEsmaltacaoProdutosComponent implements OnInit {


  produtosForm: FormGroup;
  // Trocar por matrícula
  selectProdutos:string[] = [
    "P210", "P21", "P760", "P76", "P111", "P11", "P750", "P75"
  ];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.produtosForm = this.fb.group({
      sku: ['', Validators.compose([Validators.required])],
      qtdPecasCarro: ['', Validators.compose([Validators.required])],
      qtdPecasDefeito: ['', Validators.compose([Validators.required])],
      matriculaInspetor: ['', Validators.compose([Validators.required])],
    })
  }
}
