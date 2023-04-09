import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoRequeimaProcessoCabineComponent } from './gestao-requeima-processo-cabine.component';

describe('GestaoRequeimaProcessoCabineComponent', () => {
  let component: GestaoRequeimaProcessoCabineComponent;
  let fixture: ComponentFixture<GestaoRequeimaProcessoCabineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoRequeimaProcessoCabineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoRequeimaProcessoCabineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
