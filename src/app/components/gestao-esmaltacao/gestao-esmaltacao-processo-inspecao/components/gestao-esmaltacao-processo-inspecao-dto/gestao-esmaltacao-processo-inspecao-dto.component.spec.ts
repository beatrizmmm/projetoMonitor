import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoProcessoInspecaoDtoComponent } from './gestao-esmaltacao-processo-inspecao-dto.component';

describe('GestaoEsmaltacaoProcessoInspecaoDtoComponent', () => {
  let component: GestaoEsmaltacaoProcessoInspecaoDtoComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoProcessoInspecaoDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoProcessoInspecaoDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoProcessoInspecaoDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
