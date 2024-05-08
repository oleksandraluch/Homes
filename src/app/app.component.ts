import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  // in-line template, wow:
  // template: `<h1>Hello World!</h1>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,
            RouterModule
  ]
})
export class AppComponent {
  title = 'Homes';
}
