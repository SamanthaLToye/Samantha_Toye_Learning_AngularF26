import { Component, inject } from '@angular/core';
import { CollectionListItem} from '../collection-list-item/collection-list-item';
import { collectionEv } from '../../shared/collectionEv';
import { CollectionServ } from '../../services/collection-serv';
import { RouterLink } from '@angular/router'

@Component({
  imports: [RouterLink, CollectionListItem],
  selector: 'app-collection-list',
  styleUrl: './collection-list.scss',
  templateUrl: './collection-list.html',
})
//list an array of 4 or more content items
export class CollectionList {
  CollectionServ = inject(CollectionServ);

  collectible = this.CollectionServ.CollectionList;
  //listen for the collectionEvent emitted and handle it
  handleItemClick(event: collectionEv): void {
    console.log(`Collectible ID ${event.id} action: ${event.action}`);

    //add the event to list component from service for removing
    this.CollectionServ.removeCollection(event.id);
  }
}
