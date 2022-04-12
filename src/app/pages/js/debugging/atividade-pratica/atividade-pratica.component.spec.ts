import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadePraticaComponent } from './atividade-pratica.component';

describe('AtividadePraticaComponent', () => {
  let component: AtividadePraticaComponent;
  let fixture: ComponentFixture<AtividadePraticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadePraticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadePraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
