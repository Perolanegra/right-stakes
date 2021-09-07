import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { HomeService } from "../../home/home.service";

@Injectable({
  providedIn: "root",
})
export class TournamentAuthGuard implements CanActivate {
  constructor(private service: HomeService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.service.verifyStateLogged();
  }
}
