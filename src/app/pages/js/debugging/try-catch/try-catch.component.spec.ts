import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryCatchComponent } from './try-catch.component';

describe('TryCatchComponent', () => {
  let component: TryCatchComponent;
  let fixture: ComponentFixture<TryCatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryCatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
