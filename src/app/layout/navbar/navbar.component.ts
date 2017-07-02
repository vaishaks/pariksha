import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isHamburgerClicked = false;
  isSidePanelOpen = false;
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

  constructor() {}

  ngOnInit() {}
}
