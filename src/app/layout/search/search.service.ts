import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {
  private searchApiUrl = '/manifest.json';

  getSearchResults(): Observable<string> {
    return this.http.get(this.searchApiUrl)
      .map((res: Response) => res.json());
  }

  constructor(private http: Http) { }

}
