import { AfterViewInit, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AppController } from "../core/appController";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  hide = true;
  _form: FormGroup;
  constructor(
    private appController: AppController,
    private formBuilder: FormBuilder
  ) {
    this._form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.setForm();
  }

  ngAfterViewInit() {
    
    // Promise.resolve(null).then(() => this.setElementGlobal());
    // setTimeout(() => {
    // }, 500);
  }

  setElementGlobal() {
    const headerLogin = document.querySelector("#headerLogin") as HTMLElement;
    const bodyLogin = document.querySelector("#aux") as HTMLElement;

    const bodyHeight = bodyLogin.offsetHeight - headerLogin.offsetHeight;

    console.log("bodyHeight.toString(): ", bodyHeight.toString());
    this.appController.setElementStyle(
      document.querySelector("#loginGlobal") as HTMLElement,
      "height",
      bodyHeight.toString()
    );
  }

  submit(): void {}

  setForm(): void {
    this._form.addControl(
      "username",
      new FormControl(null, [Validators.required])
    );
    this._form.addControl(
      "password",
      new FormControl(null, [Validators.required])
    );
  }
}
