import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoInventarioComponent } from './gestao-inventario.component';

describe('GestaoInventarioComponent', () => {
  let component: GestaoInventarioComponent;
  let fixture: ComponentFixture<GestaoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
