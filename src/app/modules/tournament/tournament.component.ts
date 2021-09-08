import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../core/store/app-state";
import { selectTeams } from "../core/store/reducers/teams/teams.reducer";

@Component({
  selector: "app-tournament",
  templateUrl: "./tournament.component.html",
  styleUrls: ["./tournament.component.scss"],
})
export class TournamentComponent implements OnInit {
  public tournamentName?: string;
  public teams!: Array<any>;

  constructor(public route: ActivatedRoute, private store: Store<AppState>) {}

  htmlData: Array<any> = [];

  ngOnInit(): void {
    this.getTeams();
    this.route.params.subscribe(
      (params: any) => (this.tournamentName = params["name"])
    );

    if(this.tournamentName?.toLowerCase() === 'paulista') {
      alert('Não retorna dados da API');
    }
  }

  get dataResolved(): any {
    return this.route.snapshot.data;
  }

  getTeams(): void {
    const { teams } = selectTeams(this.store);
    this.teams = teams;
    this.setData();
  }

  verifyTeam(match: any) {
    const homeTeam = this.teams.find((val) => val.id === match?.homeTeamId);
    const awayTeam = this.teams.find((val) => val.id === match?.awayTeamId);
    return { homeTeam, awayTeam };
  }

  setData() {
    (this.dataResolved.details as Array<any>).map((match: any) => {
      const teams = this.verifyTeam(match);
      this.htmlData.push({ ...match, ...teams });
    });
  }

  get data() {
    return this.htmlData;
  }
}
