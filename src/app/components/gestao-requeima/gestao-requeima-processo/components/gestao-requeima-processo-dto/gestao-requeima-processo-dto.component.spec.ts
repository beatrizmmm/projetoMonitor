import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoRequeimaProcessoDtoComponent } from './gestao-requeima-processo-dto.component';

describe('GestaoRequeimaProcessoDtoComponent', () => {
  let component: GestaoRequeimaProcessoDtoComponent;
  let fixture: ComponentFixture<GestaoRequeimaProcessoDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoRequeimaProcessoDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoRequeimaProcessoDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
