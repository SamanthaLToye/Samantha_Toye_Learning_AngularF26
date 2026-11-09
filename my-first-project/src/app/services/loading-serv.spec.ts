import { TestBed } from '@angular/core/testing';
import { LoadingServ } from './loading-serv';

describe('LoadingServ', () => {
  let service: LoadingServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
