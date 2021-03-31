import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseUrl = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private httpClient: HttpClient) {}

  public getHeaders() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return httpHeaders;
  }

  public getCourses() {
    this.httpClient
      .get(this.baseUrl, {
        headers: this.getHeaders(),
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  public getCourse(id: Number) {
    this.httpClient
      .get(this.baseUrl + '/' + id, {
        headers: this.getHeaders(),
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
