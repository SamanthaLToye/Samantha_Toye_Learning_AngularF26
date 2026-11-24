import { Component, computed, inject } from '@angular/core';
import { CollectionListItem} from '../collection-list-item/collection-list-item';
import { collectionEv } from '../../shared/collectionEv';
import { CollectionServ } from '../../services/collection-serv';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe, } from '@angular/common';
import { SavedServ } from '../../services/saved-serv';

@Component({
  imports: [RouterLink, CollectionListItem, CommonModule, DecimalPipe],
  selector: 'app-collection-list',
  styleUrl: './collection-list.scss',
  templateUrl: './collection-list.html',
})
//list an array of 4 or more content items
export class CollectionList {
  CollectionServ = inject(CollectionServ);
  protected savedServ = inject(SavedServ);


  collectible = this.CollectionServ.CollectionList;
 //add in a computed to the collection list for the search key query
  protected filteredItems = computed(() => {
    const query = this.savedServ.searchQuery().trim().toLowerCase();
    const items = this.collectible();

    //adding a filter() and includes() for the query will show all items
    if (!query) {
      return items;
    }
    // matches the items from the search name or category
    return items.filter(
      (item) =>
        (item.name ?? '').toLowerCase().includes(query) ||
        (item.category ?? '').toLowerCase().includes(query)
    );
  });
  //update the search query signal as user enters name or category
  protected onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.savedServ.setSearchQuery(input.value);
  }
  handleItemClick(event: collectionEv): void {
    console.log(`Collectible ID ${event.id} action: ${event.action}`);

    //add the event to list component from service for removing
    this.CollectionServ.removeCollection(event.id);
  }
}
