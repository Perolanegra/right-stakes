import { Component, Input, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"],
})
export class AppMenuComponent {
  @Output() private emitToggleMenu: Subject<any> = new Subject();
  @Output() private backToHome: Subject<any> = new Subject();
  @Output() private redirectLogin: Subject<any> = new Subject();

  @Input() public isLoggedIn?: boolean;
  @Input() public userEmail?: string;

  toggleMenu = () => this.emitToggleMenu.next();
  backHome = () => this.backToHome.next();
  redirectToLogin = () => this.redirectLogin.next();

  menuList = [
    {
      option: "Futebol",
      hasHrLine: true,
      redirectTo: "",
      icon: "assets/icons/soccer.png",
    },
    {
      option: "Conferir Bilhete",
      hasHrLine: false,
      redirectTo: "",
      icon: "",
    },
    {
      option: "Minhas Apostas",
      hasHrLine: false,
      redirectTo: "",
      icon: "",
    },
    {
      option: "Extrato",
      hasHrLine: true,
      redirectTo: "",
      icon: "",
    },
    {
      option: "Bonus",
      hasHrLine: false,
      redirectTo: "",
      icon: "",
    },
    {
      option: "Regras",
      hasHrLine: true,
      redirectTo: "",
      icon: "",
    },
    {
      option: "Sair",
      hasHrLine: false,
      redirectTo: "",
      icon: "assets/icons/switch.png",
    },
  ];

  clickOption(item: any): void {
    if ((item.option as string).toLowerCase() === "futebol") {
      this.backHome();
    }

    if ((item.option as string).toLowerCase() === "sair") {
      this.toggleMenu();
      this.isLoggedIn ? this.backHome() : this.redirectToLogin();
    }
  }
}
