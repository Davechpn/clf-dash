import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGuidanceComponent } from './career-guidance.component';

describe('CareerGuidanceComponent', () => {
  let component: CareerGuidanceComponent;
  let fixture: ComponentFixture<CareerGuidanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerGuidanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
