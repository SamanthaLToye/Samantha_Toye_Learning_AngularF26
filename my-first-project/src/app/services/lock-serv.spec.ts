import { TestBed } from '@angular/core/testing';
import { LockServ } from './lock-serv';

describe('LockServ', () => {
  let service: LockServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
