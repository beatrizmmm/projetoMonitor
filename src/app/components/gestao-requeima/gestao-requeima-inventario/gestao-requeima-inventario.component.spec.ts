import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoRequeimaInventarioComponent } from './gestao-requeima-inventario.component';

describe('GestaoRequeimaInventarioComponent', () => {
  let component: GestaoRequeimaInventarioComponent;
  let fixture: ComponentFixture<GestaoRequeimaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoRequeimaInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoRequeimaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
