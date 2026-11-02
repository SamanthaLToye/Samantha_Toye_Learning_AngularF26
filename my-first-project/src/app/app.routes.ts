import { Routes } from '@angular/router';
import { CollectionList} from './Components/collection-list/collection-list';
import { CollectionDetail } from './Components/collection-detail/collection-detail';
import { CollectionForm } from './Components/collection-form/collection-form';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: CollectionList },
  { path: 'items/new', component: CollectionForm },
  { path: 'items/edit/:id', component: CollectionForm },
  { path: 'items/:id', component: CollectionDetail },
  { path: '**', redirectTo: 'items' },
];
