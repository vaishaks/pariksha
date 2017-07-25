import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavbarService {

  private isBackButtonEnabledSource = new Subject<boolean>();
  private pageTitleSource = new Subject<string>();

  isBackButtonEnabled$ = this.isBackButtonEnabledSource.asObservable();
  pageTitle$ = this.pageTitleSource.asObservable();

  enableBackButton(isBackButtonEnabled: boolean) {
    this.isBackButtonEnabledSource.next(isBackButtonEnabled);
  };

  setPageTitle(pageTitle: string) {
    this.pageTitleSource.next(pageTitle);
  };

  constructor() { }
}
