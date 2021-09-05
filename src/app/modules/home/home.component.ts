import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UpdateTournments } from "../core/actions/tournments/tournments.action";
import { AppController } from "../core/appController";
import { AppState } from "../core/store/app-state";
import { selectCountries } from "../core/store/reducers/countries/countries.reducer";
import { selectCustomer } from "../core/store/reducers/cutomer/customer.reducer";
import { selectTournments } from "../core/store/reducers/tournments/tournments.reducer";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private homeService: HomeService
  ) {}

  switchVar: string = "futebol";
  tournments?: Array<any>;
  countries?: Array<any>;

  ngOnInit(): void {
    this.requestTournments();
    this.requestGames();
    this.getCountries();
  }

  UpdateTournmentsState(resp: any) {
    this.store.dispatch(UpdateTournments(resp));
  }

  requestTournments(): void {
    this.homeService.getTournments().subscribe((resp) => {
      this.UpdateTournmentsState(resp);
      this.getTournments();
    });
  }

  requestGames(): void {
    // this.homeService.getGames().subscribe((games) => {
    //   //TODO: this.UpdateGamesState(games)
    //   //TODO: this.getGames()
    // })
  }

  getGames(): void {
    //TODO: const { games } = selectGames(this.store);
    //TODO:  this.games = games;
  }

  getTournments(): void {
    const { tournments } = selectTournments(this.store);
    this.tournments = tournments;
  }

  getCountries(): void {
    const { countries } = selectCountries(this.store);
    this.countries = countries;
  }

  redirectToTournment(tournment: any) {
    console.log("tournment: ", tournment);
    //TODO: navigate to rota para direcionar para tela interna do torneio passando parametros.
  }
}
