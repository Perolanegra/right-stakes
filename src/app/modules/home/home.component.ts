import { Component, OnInit } from "@angular/core";
import { AppController } from "../core/appController";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private appController: AppController) {}

  switchVar: string = 'futebol';

  ngOnInit(): void {
    // this.appController.triggerCustomEvent('HandleStateSpinner', {
    //   value: false,
    // });
  }


  
}
