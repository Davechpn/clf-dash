import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTemplatesComponent } from './intro-templates.component';

describe('IntroTemplatesComponent', () => {
  let component: IntroTemplatesComponent;
  let fixture: ComponentFixture<IntroTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
