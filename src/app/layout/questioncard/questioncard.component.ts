import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.scss']
})
export class QuestioncardComponent implements OnInit {
  @Input() question: any;

  constructor() { }

  ngOnInit() {
  }

}
