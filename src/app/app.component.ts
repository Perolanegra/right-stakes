import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { UpdateAccount } from "./modules/core/actions/account/account.action";
import { AppController } from "./modules/core/appController";
import { AppState } from "./modules/core/store/app-state";
import { selectAccount } from "./modules/core/store/reducers/account/account.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "test-front-end";

  constructor(private store: Store<AppState>, private appController: AppController) {}

  ngOnInit() {
  }

  UpdateAccount(resp: any) {
    this.store.dispatch(UpdateAccount(resp));
  }

  getAccount() {
    const account = selectAccount(this.store);
    console.log("account: ", account);
  }

  openMenu() {
    this.appController.triggerCustomEvent("HandleDrawer", {
      value: true,
    });
  }

  closeMenu() {
    this.appController.triggerCustomEvent("HandleDrawer", {
      value: false,
    });
  }

  clickBalance() {
    console.log('o usuario clicou no saldo;');
  }

  navigateToLogin() {
    console.log('o usuario clicou para ir para página de login');
  }

  navigateBackHome() {
    console.log('o usuario clicou para voltar para home');
  }
}
