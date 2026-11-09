import { TestBed } from '@angular/core/testing';
import { ErrorServ } from './error-serv';

describe('ErrorServ', () => {
  let service: ErrorServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
