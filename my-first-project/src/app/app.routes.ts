import { Routes } from '@angular/router';
import { CollectionListItem} from './Components/collection-list-item/collection-list-item';
import { CollectionDetail } from './Components/collection-detail/collection-detail';

export const routes: Routes = [
  { path: 'items', component: CollectionListItem },
  { path: 'items/:id', component: CollectionDetail },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];
