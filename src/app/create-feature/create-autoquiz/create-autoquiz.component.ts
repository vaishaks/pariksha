import { Component, OnInit, OnDestroy } from '@angular/core';

import { InputService } from '../../input-feature/input-service/input.service';
import { NavbarService } from '../../layout/navbar/navbar.service';

@Component({
  selector: 'app-create-autoquiz',
  templateUrl: './create-autoquiz.component.html',
  styleUrls: ['./create-autoquiz.component.scss']
})
export class CreateAutoquizComponent implements OnInit, OnDestroy {
  autoQuizResults: any;

  constructor(private inputService: InputService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Auto Quiz');
    this.autoQuizResults = this.inputService.autoQuizResults;
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  }

}
