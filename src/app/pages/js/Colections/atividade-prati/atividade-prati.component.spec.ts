import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadePratiComponent } from './atividade-prati.component';

describe('AtividadePratiComponent', () => {
  let component: AtividadePratiComponent;
  let fixture: ComponentFixture<AtividadePratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadePratiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadePratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
