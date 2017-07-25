import { Component, OnInit, OnDestroy  } from '@angular/core';

import { LonelyService } from '../../layout/lonely/lonely.service';
import { NavbarService } from '../../layout/navbar/navbar.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit, OnDestroy {
  testTitle = '';

  constructor(private navbarService: NavbarService, private lonelyService: LonelyService) {}

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Create Test');
    this.lonelyService.setLonelyMessage('It\'s lonely here, why don\'t you go ahead and add some content');
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  }
}
