import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>Hello World!</h1>`, // in-line template, wow
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'Homes';
}
