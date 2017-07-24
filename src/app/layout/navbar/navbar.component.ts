import { Component, OnDestroy } from '@angular/core';

import { NavbarService } from '../../layout/navbar/navbar.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  isBackButtonEnabled = false;
  isHamburgerClicked = false;
  isSidePanelOpen = false;
  navbarServiceSubscription: Subscription;
  pageTitle = '';

  backButtonClicked = function backButtonClicked() {
    window.history.back();
  };

  hamburgerClicked = function hamburgerClicked() {
    this.isHamburgerClicked = true;
    this.isSidePanelOpen = true;
  };

  navbarClicked = function navabarClicked() {
    if (this.isSidePanelOpen && this.isHamburgerClicked === false) {
      this.isSidePanelOpen = false;
    }
    this.isHamburgerClicked = false;
  };

  outsideClicked = function outsideClicked() {
    this.isSidePanelOpen = false;
  };

  constructor(private navbarService: NavbarService) {
    this.navbarServiceSubscription = navbarService.isBackButtonEnabled$.subscribe(
      isBackButtonEnabled => {
        this.isBackButtonEnabled = isBackButtonEnabled;
      }
    );
    navbarService.pageTitle$.subscribe(
      pageTitle => {
        this.pageTitle = pageTitle;
      }
    );
  }

  ngOnDestroy() {
    this.navbarServiceSubscription.unsubscribe();
  }
}
