import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTemplatesComponent } from './registration-templates.component';

describe('RegistrationTemplatesComponent', () => {
  let component: RegistrationTemplatesComponent;
  let fixture: ComponentFixture<RegistrationTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
