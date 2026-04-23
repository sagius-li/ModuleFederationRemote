import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

export const REMOTE_CHILD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'page',
    component: PageComponent
  }
];
