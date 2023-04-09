import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFornoProcessoCabineComponent } from './gestao-forno-processo-cabine.component';

describe('GestaoFornoProcessoCabineComponent', () => {
  let component: GestaoFornoProcessoCabineComponent;
  let fixture: ComponentFixture<GestaoFornoProcessoCabineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFornoProcessoCabineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFornoProcessoCabineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
