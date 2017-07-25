import { Component, OnInit, OnDestroy  } from '@angular/core';

import { NavbarService } from '../../layout/navbar/navbar.service';

@Component({
  selector: 'app-create-search',
  templateUrl: './create-search.component.html',
  styleUrls: ['./create-search.component.scss']
})
export class CreateSearchComponent implements OnInit, OnDestroy {

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Search');
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  }

}
