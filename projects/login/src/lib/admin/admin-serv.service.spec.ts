import { TestBed, inject } from '@angular/core/testing';

import { AdminServService } from './admin-serv.service';

describe('AdminServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminServService]
    });
  });

  it('should be created', inject([AdminServService], (service: AdminServService) => {
    expect(service).toBeTruthy();
  }));
});
