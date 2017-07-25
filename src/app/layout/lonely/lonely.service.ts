import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LonelyService {

  private lonelyMessageSource = new Subject<string>();

  lonelyMessage$ = this.lonelyMessageSource.asObservable();

  setLonelyMessage(message: string) {
    this.lonelyMessageSource.next(message);
  };

  constructor() { }
}
