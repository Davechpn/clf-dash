import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionsTemplatesComponent } from './corrections-templates.component';

describe('CorrectionsTemplatesComponent', () => {
  let component: CorrectionsTemplatesComponent;
  let fixture: ComponentFixture<CorrectionsTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionsTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
