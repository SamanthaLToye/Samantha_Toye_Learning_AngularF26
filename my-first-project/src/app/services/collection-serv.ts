import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { collection } from '../shared/collection';
import { COLLECT_CONFIG } from '../shared/CollectConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionServ {
  private config = inject(COLLECT_CONFIG);
  private http = inject(HttpClient);
  apiBaseUrl = this.config.apiBaseUrl;
  private url = `${this.apiBaseUrl}/users`;
  private Collection = signal<collection[]>([]);
  CollectionList = this.Collection.asReadonly();
  //step 14 track the loading and error states as signals
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  collectionCount = computed(() => this.CollectionList().length);


  collectionMatch = computed(() => {
    const count = this.collectionCount();
    return `${count} ${count === 1 ? 'item listed' : 'items listed'}`;
  });
  //constructor does an effect when the signal changes (effect runs when signal reads change)
  constructor() {
    this.loadFromApi();
    effect(() => {
      console.log('Collection is currently: ', this.collectionMatch());
    });
  }
  //adding in the data from the JSONPlaceholder here
  private loadFromApi() {
    this.http.get<collection[]>(this.url, {
      params: { _limit: 5 }, //the json-server uses _Query parameters to filter example -> _limit = 5 _page = 2
    }).subscribe({
      next: (data) => {
        this.Collection.set(data);
        this.isLoading.set(false); //false turn off data
      },
      error: (err) => {
        console.error('Error fetching collection from API', err);
        this.error.set('Could not load data.'); //set the error message
        this.isLoading.set(false); //turn off loading with error
      }
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
    this.Collection.update((list) => list.map((c) => String(c.id) === String(updateItem.id) ? updateItem : c));
  }
  //this part is in progress from 1. Remove an item all the way through signal
  removeCollection(id: string | number) : void {
    this.Collection.update((list) => list.filter((c) => String(c.id) !== String(id)));
  }
getCollection(id: number): collection | undefined {
    return this.getItemById(id);
}
nextId(): number {
    return Math.max(0, ...this.Collection().map((c) => Number(c.id))) +1;
}
  getItemById(id: string | number): collection | undefined {
    return this.Collection().find((c) => String(c.id) === String(id));
  }
}
