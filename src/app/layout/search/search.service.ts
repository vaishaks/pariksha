import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {
  private searchApiUrl = '/searchresponse.json';
  private isSearchResultLoadedSource = new Subject<boolean>();
  searchResults = [];

  isSearchResultLoaded$ = this.isSearchResultLoadedSource.asObservable();

  getSearchResults(): Observable<string> {
    return this.http.get(this.searchApiUrl)
      .map((res: Response) => {
        const result = res.json().Result;
        this.searchResults = result;
        return result;
      });
  }

  setSearchLoaded(isSearchLoaded: boolean) {
    this.isSearchResultLoadedSource.next(isSearchLoaded);
  }

  constructor(private http: Http) { }

}
