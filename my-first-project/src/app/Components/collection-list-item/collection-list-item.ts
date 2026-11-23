import { Component, input, output } from '@angular/core';
import { collection } from '../../shared/collection';
import { collectionEv } from '../../shared/collectionEv';
import { RouterLink } from '@angular/router';
import { CommonModule, SlicePipe, TitleCasePipe } from '@angular/common';
import { ConditionTypePipe } from '../../pipes/condition-type-pipe';
import { ShortenTextPipe } from '../../pipes/shorten-text-pipe';
import { HoverStyle } from '../../directives/hover-style';
@Component({
  imports: [RouterLink, CommonModule, TitleCasePipe, SlicePipe, ConditionTypePipe, ShortenTextPipe, HoverStyle],
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
