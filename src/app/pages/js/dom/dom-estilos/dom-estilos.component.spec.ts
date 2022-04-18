import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomEstilosComponent } from './dom-estilos.component';

describe('DomEstilosComponent', () => {
  let component: DomEstilosComponent;
  let fixture: ComponentFixture<DomEstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomEstilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
