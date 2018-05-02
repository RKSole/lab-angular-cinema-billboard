import { TestBed, inject } from '@angular/core/testing';

import { MoviesJaService } from './movies-ja.service';

describe('MoviesJaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesJaService]
    });
  });

  it('should be created', inject([MoviesJaService], (service: MoviesJaService) => {
    expect(service).toBeTruthy();
  }));
});
