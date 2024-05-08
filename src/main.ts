import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import routeConfig from './app/routes';
//import { default as routeConfig } from './app/routes'; // absolutely same thing

// import vs import {}
// import - when importing something that was exported as default
//    e.g.
//    routes.ts: export default routeConfig;
//    main.ts: import routeConfig from './app/routes';
// import {} - when importing something that was just exported

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
