import { TestBed } from '@angular/core/testing';
import { LoadingInter } from './loading-inter';

describe('LoadingInter', () => {
  let service: LoadingInter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingInter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
