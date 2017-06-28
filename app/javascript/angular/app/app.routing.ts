import { Routes, RouterModule } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemEditComponent } from './media-item-edit/media-item-edit.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: 'edit/:id', component: MediaItemEditComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
