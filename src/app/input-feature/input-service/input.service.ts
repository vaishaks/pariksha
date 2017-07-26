import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 
import 'rxjs/add/operator/map'

@Injectable()
export class InputService {
  autoQuizUri = "https://pariksha-nl.azurewebsites.net/api/ExtractQnA?code=jb13xDhasoAkhRy1GHihIOgKYe/R9OGhyAg3SLxk5dYlqbdxkntWQw==";
  imageToTextUri = "http://parikshaservice.azurewebsites.net/api/vision/GetTextFromBase64EncodedImage";

  getAutoQuiz(inputText: string): Observable<string> {  
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.autoQuizUri, { text: inputText }, options)
    .map((res: Response) => res.json());
  }

  getTextFromImage(inputImg: any): Observable<string> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.imageToTextUri, inputImg , options)
    .map((res: Response) => res.json());
  }
 
  constructor(private http: Http) { }

}
