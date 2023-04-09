import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProcessoInspecaoDtoComponent } from './gestao-processo-inspecao-dto.component';

describe('GestaoProcessoInspecaoDtoComponent', () => {
  let component: GestaoProcessoInspecaoDtoComponent;
  let fixture: ComponentFixture<GestaoProcessoInspecaoDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoProcessoInspecaoDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoProcessoInspecaoDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
