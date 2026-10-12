import { computed, Injectable, signal, effect } from '@angular/core';
import { collection } from '../shared/collection';

@Injectable()
export class MockServ {
  apiBaseUrl = 'https//fake-mock-collection.com/api';
  private Collection = signal<collection[]>([
    {
      id: 1000000,
      name: 'Fake Shield',
      category: 'Mock Collection',
      value: 120000000.00,
      condition: 'No amount of polish will make this real!',
    },
    {
      id: 2000000,
      name: 'Solid Gold Charizard',
      category: 'Mock Collection',
      value: 20000000000,
      condition: 'This was totally fake!',
    },
    {
      id: 3000000,
      name: 'Mona Lisa First Edition',
      category: 'Mock Collection',
      value: 50000000000.0,
      condition: "You're kidding yourself if this was real!",
    },
    {
      id: 4000000,
      name: 'Genuine Air from 1876',
      category: 'Mock Collection',
      value: 99999999999.0,
      condition: 'This was pretty sketchy to be real in the first place.'
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
  //this part is in progress from 1. Remove an item all the way through signal
  removeCollection(id: string | number) {
    this.Collection.update((list) => list.filter((c) => c.id !== id));
  }
}
