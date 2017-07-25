import { Component, OnInit, OnDestroy  } from '@angular/core';

import { LonelyService } from '../../layout/lonely/lonely.service';
import { NavbarService } from '../../layout/navbar/navbar.service';

@Component({
  selector: 'app-create-search',
  templateUrl: './create-search.component.html',
  styleUrls: ['./create-search.component.scss']
})
export class CreateSearchComponent implements OnInit, OnDestroy {

  constructor(private navbarService: NavbarService, private lonelyService: LonelyService) {}

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Search');
    this.lonelyService.setLonelyMessage('It\'s lonely here, search for questions or quizzes to make them show up here.');
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  }

}
