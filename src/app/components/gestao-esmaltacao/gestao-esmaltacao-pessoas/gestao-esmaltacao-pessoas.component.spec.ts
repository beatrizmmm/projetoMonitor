import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEsmaltacaoPessoasComponent } from './gestao-esmaltacao-pessoas.component';

describe('GestaoEsmaltacaoPessoasComponent', () => {
  let component: GestaoEsmaltacaoPessoasComponent;
  let fixture: ComponentFixture<GestaoEsmaltacaoPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEsmaltacaoPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEsmaltacaoPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
