import { TestBed } from '@angular/core/testing';

import { NewbatchService } from './newbatch.service';

describe('NewbatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewbatchService = TestBed.get(NewbatchService);
    expect(service).toBeTruthy();
  });
});
