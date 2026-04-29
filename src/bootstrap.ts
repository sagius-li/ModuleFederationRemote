import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { REMOTE_CHILD_ROUTES } from './app/remote-child.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(REMOTE_CHILD_ROUTES), provideAnimations()]
})
  .catch(err => console.error(err));
