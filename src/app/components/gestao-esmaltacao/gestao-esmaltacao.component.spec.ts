import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoComponent } from './gestao-esmaltacao.component';

describe('GestaoEsmaltacaoComponent', () => {
  let component: GestaoEsmaltacaoComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
