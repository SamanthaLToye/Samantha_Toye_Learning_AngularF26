import { TestBed } from '@angular/core/testing';
import { ErrorInter } from './error-inter';

describe('ErrorInter', () => {
  let service: ErrorInter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorInter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
