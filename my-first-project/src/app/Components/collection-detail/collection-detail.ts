import { Component, computed, inject, input } from '@angular/core';
import { CollectionServ } from '../../services/collection-serv';

@Component({
  imports: [],
  selector: 'app-collection-detail',
  styleUrl: './collection-detail.scss',
  templateUrl: './collection-detail.html',
})
export class CollectionDetail {
  private collectionServ = inject(CollectionServ);
  id = input.required<string>();
  item = computed(() => {
    const itemId = Number(this.id());
    return this.collectionServ.getItemById(itemId);
  });
}
