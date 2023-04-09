import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoInventarioComponent } from './gestao-esmaltacao-inventario.component';

describe('GestaoEsmaltacaoInventarioComponent', () => {
  let component: GestaoEsmaltacaoInventarioComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
