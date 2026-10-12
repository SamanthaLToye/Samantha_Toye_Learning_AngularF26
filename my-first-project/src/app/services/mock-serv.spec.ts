import { TestBed } from '@angular/core/testing';
import { MockServ } from './mock-serv';

describe('MockServ', () => {
  let service: MockServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
