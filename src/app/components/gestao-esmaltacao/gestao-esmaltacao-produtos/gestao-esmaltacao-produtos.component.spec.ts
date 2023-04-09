import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoProdutosComponent } from './gestao-esmaltacao-produtos.component';

describe('GestaoEsmaltacaoProdutosComponent', () => {
  let component: GestaoEsmaltacaoProdutosComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
