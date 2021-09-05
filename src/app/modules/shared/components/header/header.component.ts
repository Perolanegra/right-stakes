import { Component, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() public hamburguerImg?: string;
  @Input() public searchIconImg?: string;
  @Input() public backIconImg?: string;
  @Input() public balance?: string;

  @Input() public isLoggedIn?: boolean;

  @Output() emitClickMenuToggle: Subject<any> = new Subject();
  @Output() redirectLogin: Subject<any> = new Subject();
  @Output() emitClickBalance: Subject<any> = new Subject();
  @Output() backHome: Subject<any> = new Subject();

  @Input() public redirect?: string;

  constructor() {}

  ngOnInit(): void {}

  backToHome = () => {
    this.backHome.next();
  };

  redirectToLogin = () => {
    this.redirectLogin.next();
  };

  onMenuToggle = () => this.emitClickMenuToggle.next();

  onClickBalance = () => this.emitClickBalance.next();
}
