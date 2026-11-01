import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { collection } from '../shared/collection';
import { COLLECT_CONFIG } from '../shared/CollectConfig';

@Injectable()

export class CollectionServ {
  private config = inject(COLLECT_CONFIG);
  apiBaseUrl = this.config.apiBaseUrl;

  private Collection = signal<collection[]>([
    {
      id: 1,
      name: 'Superman Comic',
      category: 'Collectible',
      value: 120.0,
      condition: 'Near Mint',
    },
    {
      id: 2,
      name: 'Charizard Figure',
      category: 'Figure',
      value: 200,
      condition: 'Mint',
    },
    {
      id: 3,
      name: 'Babe Ruth Baseball',
      category: 'Collectible',
      value: 175.0,
      condition: 'Near Mint',
    },
    {
      id: 4,
      name: 'Cal Ripkin Signed Card',
      category: 'Trading Card',
      value: 310,
    },
  ]);
  CollectionList = this.Collection.asReadonly();
  //this is the computed signal (computed reads value in read only)
  collectionCount = computed(() => this.CollectionList().length);

  //add a second computed off the first signal used count items from collection
  collectionMatch = computed(() => {
    const count = this.collectionCount();
    return `${count} ${count === 1 ? 'item listed' : 'items listed'}`;
  });
  //constructor does an effect when the signal changes (effect runs when signal reads change)
  constructor() {
    effect(() => {
      console.log('Collection is currently: ', this.collectionMatch());
    });
  }

  //this is the method using update that adds a new item
  addCollection(c: collection) {
    this.Collection.update((list) => [...list, c]);
  }
  addItem(c: collection) {
    this.addCollection(c);
  }
  updateCollection(updateItem: collection) {
    this.Collection.update((list) => list.map((c) => (String(c.id) === String(updateItem.id) ? updateItem : c))
    );
  }
  //this part is in progress from 1. Remove an item all the way through signal
  removeCollection(id: string | number) {
    this.Collection.update((list) => list.filter((c) => c.id !== id));
  }

  getItemById(itemId: string | number): collection | undefined {
    return this.Collection().find((c) => c.id === itemId || Number(c.id) === Number(itemId));
  }
}
