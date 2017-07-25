import { Component } from '@angular/core';

import { LonelyService } from './layout/lonely/lonely.service';
import { NavbarService } from './layout/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LonelyService, NavbarService]
})
export class AppComponent {
  title = 'app';
}
