import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFornoInventarioComponent } from './gestao-forno-inventario.component';

describe('GestaoFornoInventarioComponent', () => {
  let component: GestaoFornoInventarioComponent;
  let fixture: ComponentFixture<GestaoFornoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFornoInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFornoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
