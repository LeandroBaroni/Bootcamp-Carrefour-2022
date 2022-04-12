import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomExceptionComponent } from './dom-exception.component';

describe('DomExceptionComponent', () => {
  let component: DomExceptionComponent;
  let fixture: ComponentFixture<DomExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
