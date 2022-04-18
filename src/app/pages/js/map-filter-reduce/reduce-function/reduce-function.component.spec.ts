import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceFunctionComponent } from './reduce-function.component';

describe('ReduceFunctionComponent', () => {
  let component: ReduceFunctionComponent;
  let fixture: ComponentFixture<ReduceFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
