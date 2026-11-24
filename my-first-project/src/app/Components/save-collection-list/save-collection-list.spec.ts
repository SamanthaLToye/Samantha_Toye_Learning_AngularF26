import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveCollectionList } from './save-collection-list';

describe('SaveCollectionList', () => {
  let component: SaveCollectionList;
  let fixture: ComponentFixture<SaveCollectionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveCollectionList],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveCollectionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
