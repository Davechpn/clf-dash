import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTemplatesComponent } from './lesson-templates.component';

describe('LessonTemplatesComponent', () => {
  let component: LessonTemplatesComponent;
  let fixture: ComponentFixture<LessonTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
