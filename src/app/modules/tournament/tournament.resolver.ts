import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DefaultResolver } from "../core/default/default.resolver";
import { HomeService } from "../home/home.service";

@Injectable()
export class TournamentResolver extends DefaultResolver {
  constructor(
    private service: HomeService,
  ) {
    super();
  }

  resolver(params: any): Observable<any | undefined> {
    return this.service.getTournmentById(params.id);
  }
}
