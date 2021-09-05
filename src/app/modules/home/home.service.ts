import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getTournments(): Observable<any[]> {
    const url = `${this.url}/tournaments`;
    // const params = new HttpParams().set("pagination", pagination.toString());
    return this.http.get(url, { params: {} }) as Observable<any[]>;
  }

  getCountries(): Observable<any[]> {
    const url = `${this.url}/countries`;
    return this.http.get(url, { params: {} }) as Observable<any[]>;
  }

  getGames(): Observable<any[]> {
    const url = `${this.url}/teams`;
    return this.http.get(url, { params: {} }) as Observable<any[]>;
  }
}
