import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDetailsComponent } from './curriculum-details.component';

describe('CurriculumDetailsComponent', () => {
  let component: CurriculumDetailsComponent;
  let fixture: ComponentFixture<CurriculumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
