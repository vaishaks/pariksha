import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../layout/navbar/navbar.service';
import { InputService } from '../input-service/input.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable }         from 'rxjs/Observable';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [InputService]
})
export class InputTextComponent implements OnInit {

  textArea: any;
  mode: number;
  enteredText: string;
  

  constructor(private navbarService: NavbarService, private InputService: InputService, private router: Router, private activeRoute: ActivatedRoute) {
      
   }

  ngOnInit() {
    this.textArea = document.getElementById('txtArea');
    
    this.navbarService.enableBackButton(true);
    this.navbarService.setPageTitle('Text');
        
    this.activeRoute.params.subscribe((params: Params) => {
        this.enteredText = params['enteredText'];
      });

    if(this.enteredText != null) 
    {
      this.textArea.value = this.enteredText;
      this.mode = 1;
    }
    else
    {
      this.mode = 2;  
    }
  }

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  };

  submitText() {
    var text: any = document.getElementById('txtArea');

    switch(this.mode)
    {
      case 1: break;

      case 2: this.InputService.getAutoQuiz(text.value).subscribe(
              results => {
                this.router.navigate(['/create/auto-quiz/questions']);
                console.log(results);
              }
              ); break;
    }
    
  }

}
