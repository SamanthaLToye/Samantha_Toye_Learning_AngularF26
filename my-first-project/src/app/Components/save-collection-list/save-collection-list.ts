import { Component, computed, inject } from '@angular/core';
import { CollectionServ } from '../../services/collection-serv';
import { SavedServ } from '../../services/saved-serv';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-save-collection-list',
  styleUrl: './save-collection-list.scss',
  templateUrl: './save-collection-list.html',
})
export class SaveCollectionList {
  private collectionServ = inject(CollectionServ);
  protected savedServ = inject(SavedServ);

  //look up items with a computed() and skip any ids no longer in list
  protected savedItems = computed(() => {
    const ids = this.savedServ.ids();
    return this.collectionServ.CollectionList().filter((item) => ids.includes(Number(item.id)));
  });
  protected onUnsave(itemId: string | number): void {
    this.savedServ.toggle(Number(itemId));
  }
}
