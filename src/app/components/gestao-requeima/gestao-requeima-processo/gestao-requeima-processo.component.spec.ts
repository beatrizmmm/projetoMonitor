import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoRequeimaProcessoComponent } from './gestao-requeima-processo.component';

describe('GestaoRequeimaProcessoComponent', () => {
  let component: GestaoRequeimaProcessoComponent;
  let fixture: ComponentFixture<GestaoRequeimaProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoRequeimaProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoRequeimaProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
