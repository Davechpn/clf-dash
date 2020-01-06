import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingTemplatesComponent } from './sharing-templates.component';

describe('SharingTemplatesComponent', () => {
  let component: SharingTemplatesComponent;
  let fixture: ComponentFixture<SharingTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
