import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { UpdateAccount } from "./modules/core/actions/account/account.action";
import { UpdateCountries } from "./modules/core/actions/countries/countries.action";
import { AppController } from "./modules/core/default/appController";
import { AppState } from "./modules/core/store/app-state";
import { selectAccount } from "./modules/core/store/reducers/account/account.reducer";
import { selectCustomer } from "./modules/core/store/reducers/cutomer/customer.reducer";
import { HomeService } from "./modules/home/home.service";
import { LoginService } from "./modules/login/login.service";

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
    public router: Router,
    private loginService: LoginService,
    private homeService: HomeService
  ) {}

  hasAuthentication?: boolean;
  userBalance?: string;
  userEmail?: string;

  ngOnInit(): void {
    this.hasAuth();
    this.getAccount();
    this.requestCountries();
  }

  requestCountries(): void {
    this.homeService.getCountries().subscribe((countries: Array<any>) => {
      if (countries && countries.length) {
        this.updateCountries({ countries });
      }
    });
  }

  getAccount(): void {
    this.loginService.getAuth().subscribe((resp: Array<any>) => {
      if (resp && resp.length) {
        this.updateAccount(resp[0]); // como não existe endpoint fiz isso acessando a primeira posição.
      }
    });
  }

  updateAccount(resp: any): void {
    this.store.dispatch(UpdateAccount(resp));
  }

  updateCountries(resp: any): void {
    this.store.dispatch(UpdateCountries(resp));
  }

  getUserInfo(): void {
    const { balance, username } = selectAccount(this.store);
    this.userBalance = balance;
    this.userEmail = username;
  }

  @HostListener("window:HandleAuthentication", ["$event"])
  hasAuth(): void {
    const { isLogged } = selectCustomer(this.store);
    this.hasAuthentication = isLogged;
    if (isLogged) this.getUserInfo();
  }

  openMenu(): void {
    this.appController.triggerCustomEvent("HandleDrawer", {
      value: true,
    });
  }

  closeMenu(): void {
    this.appController.triggerCustomEvent("HandleDrawer", {
      value: false,
    });
  }

  clickBalance(): void {
    alert('o usuario clicou no saldo');
  }

  navigateToLogin(): void {
    this.appController.navigate("login");
  }

  navigateBackHome(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      if (currentUrl === "/home") window.location.reload();
      this.appController.navigate("home");
    });
  }
}
