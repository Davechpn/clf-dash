import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllubiComponent } from './syllubi.component';

describe('SyllubiComponent', () => {
  let component: SyllubiComponent;
  let fixture: ComponentFixture<SyllubiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllubiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllubiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
