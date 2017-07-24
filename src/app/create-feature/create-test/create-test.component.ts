import { Component, OnInit, OnDestroy  } from '@angular/core';

import { NavbarService } from '../../layout/navbar/navbar.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit, OnDestroy {

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Create Test');
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  }
}
