import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourse(x: string): Observable<any[]> {
    return this.http
      .get<any[]>('https://golf-courses-api.herokuapp.com/courses/' + x)
      .pipe(
        tap((data) => console.log('Data: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    // If clientside or network error occured...
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`
    } else { // If backend returned an unsuccessful response code, response body might give hint why...
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage)
    return throwError(errorMessage)
  }


}
