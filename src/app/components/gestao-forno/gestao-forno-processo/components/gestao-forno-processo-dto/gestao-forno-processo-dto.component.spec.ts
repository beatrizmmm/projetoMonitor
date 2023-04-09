import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFornoProcessoDtoComponent } from './gestao-forno-processo-dto.component';

describe('GestaoFornoProcessoDtoComponent', () => {
  let component: GestaoFornoProcessoDtoComponent;
  let fixture: ComponentFixture<GestaoFornoProcessoDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFornoProcessoDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFornoProcessoDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
