import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFornoProcessoComponent } from './gestao-forno-processo.component';

describe('GestaoFornoProcessoComponent', () => {
  let component: GestaoFornoProcessoComponent;
  let fixture: ComponentFixture<GestaoFornoProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFornoProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFornoProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
