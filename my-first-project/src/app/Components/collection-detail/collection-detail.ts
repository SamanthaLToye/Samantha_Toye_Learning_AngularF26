import { Component, computed, inject, input, OnDestroy, OnInit } from '@angular/core';
import { CollectionServ } from '../../services/collection-serv';
import { RouterLink, Router } from '@angular/router';
import { it } from 'vitest';

@Component({
  imports: [RouterLink],
  selector: 'app-collection-detail',
  styleUrl: './collection-detail.scss',
  templateUrl: './collection-detail.html',
})
export class CollectionDetail implements OnInit, OnDestroy {
  protected collectionServ = inject(CollectionServ);
  private router = inject(Router);

  id = input.required<string>();


  item = computed(() => {
    const itemId = Number(this.id());
    return this.collectionServ.getItemById(itemId);
  });

  private openedAt = 0;
  private itemName = '';
  ngOnInit(): void {
    const itemId = Number(this.id());
    const foundItem = this.collectionServ.getItemById(itemId);
    this.itemName = foundItem?.name ?? `Item #${itemId}`;
    this.openedAt = Date.now();

    console.log(`[lifecycle] opened: ${this.itemName}`);
  }
  ngOnDestroy(): void {
    const timeSpent = Math.round((Date.now() - this.openedAt) / 1000);
    console.log(`[lifecycle] closed: ${this.itemName} after ${timeSpent} seconds`);
  }
}
