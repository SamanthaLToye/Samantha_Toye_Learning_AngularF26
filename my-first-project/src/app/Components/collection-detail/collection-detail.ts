import { Component, computed, inject, input } from '@angular/core';
import { CollectionServ } from '../../services/collection-serv';
import { RouterLink, Router } from '@angular/router';
import { CollectionListItem } from '../collection-list-item/collection-list-item';

@Component({
  imports: [RouterLink, CollectionListItem],
  selector: 'app-collection-detail',
  styleUrl: './collection-detail.scss',
  templateUrl: './collection-detail.html',
})
export class CollectionDetail {
  protected collectionServ = inject(CollectionServ);
  private router = inject(Router);

  id = input.required<string>();
  item = computed(() => {
    const itemId = Number(this.id());
    return this.collectionServ.getItemById(itemId);
  });
}
