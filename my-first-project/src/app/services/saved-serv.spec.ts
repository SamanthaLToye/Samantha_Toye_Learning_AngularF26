import { TestBed } from '@angular/core/testing';
import { SavedServ } from './saved-serv';

describe('SavedServ', () => {
  let service: SavedServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
