import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFornoComponent } from './gestao-forno.component';

describe('GestaoFornoComponent', () => {
  let component: GestaoFornoComponent;
  let fixture: ComponentFixture<GestaoFornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
