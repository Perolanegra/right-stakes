import { Component } from "@angular/core";
import { Router } from "@angular/router";
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

  constructor(
    private store: Store<AppState>,
    private appController: AppController,
    public router: Router
  ) {}

  ngOnInit() {}

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
    console.log("o usuario clicou no saldo;");
  }

  navigateToLogin(): void {
    this.appController.navigate('login');
  }

  navigateBackHome() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      if (currentUrl === "/home") window.location.reload();
      this.appController.navigate("home");
    });
  }
}
