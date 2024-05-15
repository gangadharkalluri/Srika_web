import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarasaulComponent } from './carasaul.component';

describe('CarasaulComponent', () => {
  let component: CarasaulComponent;
  let fixture: ComponentFixture<CarasaulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarasaulComponent]
    });
    fixture = TestBed.createComponent(CarasaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
