import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LonelyService } from '../../layout/lonely/lonely.service';
import { NavbarService } from '../../layout/navbar/navbar.service';
import { SearchService } from '../../layout/search/search.service';

@Component({
  selector: 'app-create-search',
  templateUrl: './create-search.component.html',
  styleUrls: ['./create-search.component.scss']
})
export class CreateSearchComponent implements OnInit, OnDestroy {
  isSearchLoaded = false;
  searchServiceSubscription: Subscription;

  setLonelyMessage() {
    setTimeout(() => {
      this.lonelyService.setLonelyMessage('It\'s lonely here, search for questions or quizzes to make them show up here.');
    });
  };

  constructor(private navbarService: NavbarService,
    private lonelyService: LonelyService,
    private searchService: SearchService) {

    this.searchServiceSubscription = this.searchService.isSearchResultLoaded$.subscribe(
      isSearchLoaded => {
        this.isSearchLoaded = isSearchLoaded;
        this.setLonelyMessage();
      }
    );
  }

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Search');
    this.setLonelyMessage();
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
    this.searchServiceSubscription.unsubscribe();
  }

}
