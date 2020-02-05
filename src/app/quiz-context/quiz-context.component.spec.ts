import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizContextComponent } from './quiz-context.component';

describe('QuizContextComponent', () => {
  let component: QuizContextComponent;
  let fixture: ComponentFixture<QuizContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
