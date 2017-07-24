import { Component } from '@angular/core';

import { NavbarService } from './layout/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavbarService]
})
export class AppComponent {
  title = 'app';
}
