import { Component, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"],
})
export class AppMenuComponent implements OnInit {
  @Output() private emitToggleMenu: Subject<any> = new Subject();
  @Output() private backToHome: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  toggleMenu = () => this.emitToggleMenu.next();

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
      this.backToHome.next();
    }
  }
}
