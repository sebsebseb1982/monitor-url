import { TestBed } from '@angular/core/testing';

import { MonitoredUrlService } from './monitored-url.service';

describe('MonitoredUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonitoredUrlService = TestBed.get(MonitoredUrlService);
    expect(service).toBeTruthy();
  });
});
