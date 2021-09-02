import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-drawer-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @ViewChild("drawer", { static: true }) public drawer?: MatDrawer;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:HandleDrawer', ['$event'])
  drawerHandler({ detail }: CustomEvent): void {
    this.drawer?.toggle(detail.value);
  }
}
