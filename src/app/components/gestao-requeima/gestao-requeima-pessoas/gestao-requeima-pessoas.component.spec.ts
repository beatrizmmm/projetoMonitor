import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoRequeimaPessoasComponent } from './gestao-requeima-pessoas.component';

describe('GestaoRequeimaPessoasComponent', () => {
  let component: GestaoRequeimaPessoasComponent;
  let fixture: ComponentFixture<GestaoRequeimaPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoRequeimaPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoRequeimaPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
