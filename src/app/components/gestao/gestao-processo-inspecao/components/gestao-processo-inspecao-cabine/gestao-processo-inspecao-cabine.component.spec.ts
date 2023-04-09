import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProcessoInspecaoCabineComponent } from './gestao-processo-inspecao-cabine.component';

describe('GestaoProcessoInspecaoCabineComponent', () => {
  let component: GestaoProcessoInspecaoCabineComponent;
  let fixture: ComponentFixture<GestaoProcessoInspecaoCabineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoProcessoInspecaoCabineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoProcessoInspecaoCabineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
