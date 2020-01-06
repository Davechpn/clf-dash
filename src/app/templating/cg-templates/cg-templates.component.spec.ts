import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgTemplatesComponent } from './cg-templates.component';

describe('CgTemplatesComponent', () => {
  let component: CgTemplatesComponent;
  let fixture: ComponentFixture<CgTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
