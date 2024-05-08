// this file defines routes in the app
// also modify main.ts to use the routeConfig

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// routeConfig array stores all the routes, their associated views, and page titles (optional)
const routeConfig: Routes = [
    // "/" path:
    {
        path: '', 
        component: HomeComponent,
        title: 'Home Page'
    },
    // "/details" path:
    {
        path: 'details', 
        component: DetailsComponent,
        title: 'Home Page'
    }
];
export default routeConfig;
