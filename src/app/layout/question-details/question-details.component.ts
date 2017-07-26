import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NavbarService } from '../../layout/navbar/navbar.service';
import { SearchService } from '../search/search.service'

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit, OnDestroy {
  isQuestionLoaded = false;
  routeSubscription: Subscription;
  question: any;

  private findQuestion = function(id) {
    for (const question of this.searchService.searchResults) {
      if (question.id === id) {
        this.question = question;
        this.isQuestionLoaded = true;
        console.log(question);
      }
    }
  };

  constructor(private route: ActivatedRoute,
    private navbarService: NavbarService,
    private searchService: SearchService) { }

  ngOnInit() {
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Question');
    this.routeSubscription = this.route
      .queryParams
      .subscribe(params => {
        const questionId = params['id'] || 0;
        this.findQuestion(questionId);
      });
  };

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  };

}
