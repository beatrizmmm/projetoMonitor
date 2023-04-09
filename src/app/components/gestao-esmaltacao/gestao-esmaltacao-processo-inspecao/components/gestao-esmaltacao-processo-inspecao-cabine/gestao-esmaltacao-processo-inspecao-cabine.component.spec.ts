import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoProcessoInspecaoCabineComponent } from './gestao-esmaltacao-processo-inspecao-cabine.component';

describe('GestaoEsmaltacaoProcessoInspecaoCabineComponent', () => {
  let component: GestaoEsmaltacaoProcessoInspecaoCabineComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoProcessoInspecaoCabineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoProcessoInspecaoCabineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoProcessoInspecaoCabineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
