import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProcessoInspecaoComponent } from './gestao-processo-inspecao.component';

describe('GestaoProcessoInspecaoComponent', () => {
  let component: GestaoProcessoInspecaoComponent;
  let fixture: ComponentFixture<GestaoProcessoInspecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoProcessoInspecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoProcessoInspecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
