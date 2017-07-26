import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.scss']
})
export class QuestioncardComponent implements OnInit {
  @Input() question: any;

  questionCardClicked = function(questionId) {
    this.router.navigate(['create/test/search/details'], { queryParams: { id: questionId } });
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
