import { TestBed } from '@angular/core/testing';

import { PrismicService } from './prismic.service';

describe('PrismicService', () => {
  let service: PrismicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
