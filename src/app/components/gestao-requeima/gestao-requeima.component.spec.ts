import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoRequeimaComponent } from './gestao-requeima.component';

describe('GestaoRequeimaComponent', () => {
  let component: GestaoRequeimaComponent;
  let fixture: ComponentFixture<GestaoRequeimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoRequeimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoRequeimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
