import { Routes } from '@angular/router';
import { CollectionList} from './Components/collection-list/collection-list';
import { verifyGuard } from './shared/edit-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: CollectionList },
  {
    path: 'items/new',
    loadComponent: () =>
      import('./Components/collection-form/collection-form').then((m) => m.CollectionForm),
  },
  {
    path: 'items/edit/:id',
    loadComponent: () =>
      import('./Components/collection-form/collection-form').then((m) => m.CollectionForm),
    canActivate: [verifyGuard],
  },
  {
    path: 'items/:id',
    loadComponent: () =>
      import('./Components/collection-detail/collection-detail').then((m) => m.CollectionDetail),
  },
  { path: 'saved',
  loadComponent: () =>
  import('./Components/save-collection-list/save-collection-list').then((m) => m.SaveCollectionList),
},
  { path: '**', redirectTo: 'items' },
];
