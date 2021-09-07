import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UpdateTeams } from "../core/actions/teams/teams.action";
import { UpdateTournments } from "../core/actions/tournments/tournments.action";
import { AppController } from "../core/appController";
import { AppState } from "../core/store/app-state";
import { selectCountries } from "../core/store/reducers/countries/countries.reducer";
import { selectCustomer } from "../core/store/reducers/cutomer/customer.reducer";
import { selectTeams } from "../core/store/reducers/teams/teams.reducer";
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
    private homeService: HomeService,
    private appController: AppController
  ) {}

  switchVar: string = "futebol";
  tournments?: Array<any>;
  countries?: Array<any>;
  teams?: Array<any>;

  ngOnInit(): void {
    this.requestTournments();
    this.requestGames();
    this.getCountries();
  }

  updateTournmentsState(resp: any) {
    this.store.dispatch(UpdateTournments(resp));
  }

  requestTournments(): void {
    this.homeService.getTournments().subscribe((resp) => {
      this.updateTournmentsState(resp);
      this.getTournments();
    });
  }

  requestGames(): void {
    this.homeService.getGames().subscribe((teams) => {
      this.updateGamesState({ teams });
      this.getGames();
    });
  }

  updateGamesState(resp: any) {
    this.store.dispatch(UpdateTeams(resp));
  }

  getGames(): void {
    const { teams } = selectTeams(this.store);
    this.teams = teams;
  }

  getTournments(): void {
    const { tournments } = selectTournments(this.store);
    this.tournments = tournments;
  }

  getCountries(): void {
    const { countries } = selectCountries(this.store);
    this.countries = countries;
  }

  redirectToTournment(tournament: any): void {
    //TODO: navigate to rota para direcionar para tela interna do torneio passando parametros.
    console.log("tournament: ", tournament);
    this.appController.navigateWithParams('tournament/details/', [tournament.id, tournament.name]);
  }
}
