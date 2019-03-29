import { TestBed } from '@angular/core/testing';

import { LibrosAPIService } from './libros-api.service';

describe('LibrosAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosAPIService = TestBed.get(LibrosAPIService);
    expect(service).toBeTruthy();
  });
});
