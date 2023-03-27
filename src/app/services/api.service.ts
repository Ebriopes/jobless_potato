import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private readonly httpClient: HttpClient) {}

  get(url: string) {
    return this.httpClient.get(url, this.httpOptions);
    // .pipe(retry(1), catchError(this.processError));
  }

  post(url: string, body: any) {
    return this.httpClient.post(url, body, this.httpOptions);
  }

  // private processError(err: any): Observable<void> {
  //   let message = '';
  //   if (err.error instanceof ErrorEvent) {
  //     message = err.error.message;
  //   } else {
  //     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
  //   }
  //   console.log(err);
  //   return throwError(() => {
  //     message;
  //   });
  // }
}
