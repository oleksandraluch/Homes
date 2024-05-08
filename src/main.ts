import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import routeConfig from './app/routes';

// import vs import {}

// import - when importing something that was exported as default
// e.g.
// export default routeConfig;


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
