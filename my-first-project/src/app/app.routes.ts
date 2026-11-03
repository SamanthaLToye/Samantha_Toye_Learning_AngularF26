import { Routes } from '@angular/router';
import { CollectionList} from './Components/collection-list/collection-list';
import { CollectionDetail } from './Components/collection-detail/collection-detail';
import { CollectionForm } from './Components/collection-form/collection-form';
import { verifyGuard } from './shared/edit-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: CollectionList },
  { path: 'items/new', component: CollectionForm },
  { path: 'items/edit/:id', component: CollectionForm, canActivate: [verifyGuard] },
  { path: 'items/:id', component: CollectionDetail },
  { path: '**', redirectTo: 'items' },
];
