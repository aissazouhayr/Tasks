import { TestBed } from '@angular/core/testing';

import { ComponenetGuardsService } from './componenet-guards.service';

describe('ComponenetGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponenetGuardsService = TestBed.get(ComponenetGuardsService);
    expect(service).toBeTruthy();
  });
});
