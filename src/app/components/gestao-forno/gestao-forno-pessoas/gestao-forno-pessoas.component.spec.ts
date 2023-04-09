import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFornoPessoasComponent } from './gestao-forno-pessoas.component';

describe('GestaoFornoPessoasComponent', () => {
  let component: GestaoFornoPessoasComponent;
  let fixture: ComponentFixture<GestaoFornoPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFornoPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFornoPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
