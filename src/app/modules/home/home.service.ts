import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../core/store/app-state";
import { selectCustomer } from "../core/store/reducers/cutomer/customer.reducer";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient, private store: Store<AppState>) {}

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

  getTournmentById(id: number): Observable<any[]> {
    const url = `${this.url}/matches?tournamentId=${id}`;
    return this.http.get(url, { params: {} }) as Observable<any[]>;
  }

  verifyStateLogged(): boolean {
    const { isLogged } = selectCustomer(this.store);
    return isLogged;
  }
}
