import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LoginService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAuth(): Observable<any[]> {
    const url = `${this.url}/tournaments`;
    // const params = new HttpParams().set("pagination", pagination.toString());
    return this.http.get(url, { params: {} }) as Observable<any[]>;
  }
}
