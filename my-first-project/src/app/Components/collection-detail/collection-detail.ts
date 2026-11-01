import { Component, computed, inject, input } from '@angular/core';
import { CollectionServ } from '../../services/collection-serv';
import { RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
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
