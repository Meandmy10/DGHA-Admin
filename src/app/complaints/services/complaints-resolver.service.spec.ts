import { TestBed } from '@angular/core/testing';

import { ComplaintsResolverService } from './complaints-resolver.service';

describe('ComplaintsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintsResolverService = TestBed.get(ComplaintsResolverService);
    expect(service).toBeTruthy();
  });
});
