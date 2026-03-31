import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(Which Component, Which Config)
// App  - Component (Typescript, HTML , CSS, Spec.ts)
