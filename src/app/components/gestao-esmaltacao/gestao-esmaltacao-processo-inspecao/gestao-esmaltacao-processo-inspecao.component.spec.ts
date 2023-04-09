import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoProcessoInspecaoComponent } from './gestao-esmaltacao-processo-inspecao.component';

describe('GestaoEsmaltacaoProcessoInspecaoComponent', () => {
  let component: GestaoEsmaltacaoProcessoInspecaoComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoProcessoInspecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoProcessoInspecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoProcessoInspecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
