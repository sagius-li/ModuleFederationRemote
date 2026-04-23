import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { REMOTE_CHILD_ROUTES } from './remote-child.routes';

export const REMOTE_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: REMOTE_CHILD_ROUTES
  }
];
