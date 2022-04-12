import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadePooComponent } from './atividade-poo.component';

describe('AtividadePooComponent', () => {
  let component: AtividadePooComponent;
  let fixture: ComponentFixture<AtividadePooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadePooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadePooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
