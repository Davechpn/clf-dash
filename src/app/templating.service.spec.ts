import { TestBed } from '@angular/core/testing';

import { TemplatingService } from './templating.service';

describe('TemplatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplatingService = TestBed.get(TemplatingService);
    expect(service).toBeTruthy();
  });
});
