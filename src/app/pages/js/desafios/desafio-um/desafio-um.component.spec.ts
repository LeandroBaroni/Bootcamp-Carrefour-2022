import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioUmComponent } from './desafio-um.component';

describe('DesafioUmComponent', () => {
  let component: DesafioUmComponent;
  let fixture: ComponentFixture<DesafioUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafioUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
