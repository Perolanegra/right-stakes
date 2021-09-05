import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UpdateTournments } from "../core/actions/tournments/tournments.action";
import { AppController } from "../core/appController";
import { AppState } from "../core/store/app-state";
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
    private appController: AppController,
    private store: Store<AppState>,
    private homeService: HomeService
  ) {}

  switchVar: string = "futebol";
  tournments?: Array<any>;

  ngOnInit(): void {
    this.requestTournments();
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

  getTournments(): void {
    const { tournments } = selectTournments(this.store);
    this.tournments = tournments;
  }

  redirectToTournment(tournment: any) {
    console.log("tournment: ", tournment);
    //TODO: navigate to rota para direcionar para tela interna do torneio passando parametros.
  }
}
