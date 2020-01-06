import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTemplatesComponent } from './comments-templates.component';

describe('CommentsTemplatesComponent', () => {
  let component: CommentsTemplatesComponent;
  let fixture: ComponentFixture<CommentsTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
