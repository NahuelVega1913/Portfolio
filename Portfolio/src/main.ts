import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// Remove misplaced and duplicate redirectToG functions from main.ts.
// If you need these functions, define them inside a component class.
