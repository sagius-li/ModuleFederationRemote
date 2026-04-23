import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { REMOTE_CHILD_ROUTES } from './app/remote-child.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(REMOTE_CHILD_ROUTES)]
})
  .catch(err => console.error(err));
