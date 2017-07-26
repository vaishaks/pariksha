import { Component } from '@angular/core';

import { LonelyService } from './layout/lonely/lonely.service';
import { NavbarService } from './layout/navbar/navbar.service';
import { SearchService } from './layout/search/search.service';
import { InputService } from './input-feature/input-service/input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LonelyService, NavbarService, SearchService, InputService]
})
export class AppComponent {
  title = 'app';
}
