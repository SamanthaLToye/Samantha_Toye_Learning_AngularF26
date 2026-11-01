import { Routes } from '@angular/router';
import { CollectionList} from './Components/collection-list/collection-list';
import { CollectionListItem} from './Components/collection-list-item/collection-list-item';
import { CollectionDetail } from './Components/collection-detail/collection-detail';
import { CollectionForm } from './Components/collection-form/collection-form';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: CollectionList },
  { path: 'items/new', component: CollectionForm },
  { path: 'items/:id', component: CollectionDetail },
  { path: 'collection/edit/:id', component: CollectionForm },
  { path: '**', redirectTo: 'items' }
];
