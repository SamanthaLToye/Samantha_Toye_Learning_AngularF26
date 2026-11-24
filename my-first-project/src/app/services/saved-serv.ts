import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedServ {
  //signal with readonly and using JSON.stringify key in save
  private readonly savedKey = 'collectiblesApp.saved';
  private readonly savedIds = signal<number[]>(this.load(this.savedKey, []));
  readonly ids = this.savedIds.asReadonly();

  //one preference search query to filter list using the same load and effect as savedKey
  private readonly searchKey = 'collectiblesApp.searchQuery';
  private readonly searchQuerySignal = signal<string>(this.load(this.searchKey, ''));
  readonly searchQuery = this.searchQuerySignal.asReadonly();


// effect will rerun when signal changes, added the search query signal to effect
  constructor() {
    effect(() => {
      this.save(this.savedKey, this.savedIds());
    });
    effect(() => {
      this.save(this.searchKey, this.searchQuerySignal());
    });
  }
  isSaved(id:number): boolean {
    return this.savedIds().includes(id);
  }
  //toggle(id) using update() filter() and currentIds with immutable methods
  toggle(id:number): void {
    this.savedIds.update((currentIds) =>
    currentIds.includes(id) ? currentIds.filter((existingId) =>
      existingId !== id) : [...currentIds, id]);
  }
  setSearchQuery(query: string): void {
    this.searchQuerySignal.set(query);
  }
  // method to read back signal using a try/catch  with JSON.parse
  private load<T>(key: string, fallback: T): T {
    try {
      return JSON.parse(localStorage.getItem(key) ?? '') as T;
    } catch {
      return fallback;
    }
  }
  private save(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignores the storage errors and doesn't break in app */
    }
  }
}
