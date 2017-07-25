import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LonelyService } from '../../layout/lonely/lonely.service';

@Component({
  selector: 'app-lonely',
  templateUrl: './lonely.component.html',
  styleUrls: ['./lonely.component.scss']
})
export class LonelyComponent implements OnDestroy {
  lonelyMessage = '';
  lonelyServiceSubscription: Subscription;

  constructor(private lonelyService: LonelyService) {
    this.lonelyServiceSubscription = this.lonelyService.lonelyMessage$.subscribe(
      message => {
        this.lonelyMessage = message;
      }
    );
  }

  ngOnDestroy() {
    this.lonelyServiceSubscription.unsubscribe();
  }

}
