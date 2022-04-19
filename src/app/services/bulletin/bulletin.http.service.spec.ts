import { TestBed } from '@angular/core/testing';

import { Bulletin.HttpService } from './bulletin.http.service';

describe('Bulletin.HttpService', () => {
  let service: Bulletin.HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bulletin.HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
