import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from './environments/environment';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ]
});




