import { Component, input, output } from '@angular/core';
import { collection } from '../../shared/collection';
import { collectionEv } from '../../shared/collectionEv';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-collection-list-item',
  styleUrl: './collection-list-item.scss',
  templateUrl: './collection-list-item.html',
})
//use input function to create a signal to read the template
export class CollectionListItem {
  item = input.required<collection>();

  //output() from event goes here from collectionEvent
  itemClicked = output<collectionEv>();
  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;
  }
  //I did an method to create the remove from list
  protected remove(event: PointerEvent): void {
    event.stopPropagation();
    this.itemClicked.emit({
      id: this.item().id,
      action: 'remove',
    });
  }
}
