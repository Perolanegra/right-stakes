import { AfterViewInit, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpdateAccount } from "../core/actions/account/account.action";
import { UpdateCustomer } from "../core/actions/customer/customer.action";
import { AppController } from "../core/appController";
import { AppState } from "../core/store/app-state";
import { selectAccount } from "../core/store/reducers/account/account.reducer";
import { LoginService } from "./login.service";

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
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private store: Store<AppState>
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

  submit(): void {
    if (this._form.valid) {
      // NOTA: Fiz dessa forma pois se eu fizer uma request get chamando o endpoint 
      // como foi passado no exemplo: http://localhost:3000/users?username=test@test.com&amp;password=123qweASD
      // ao adicionar parametros a mais na senha, a api me retorna o dado mesmo se a senha não estiver igual
      const { username, password } = selectAccount(this.store);
      if (
        this._form.controls.username.value === username &&
        this._form.controls.password.value === password
      ) {
        this.store.dispatch(UpdateCustomer({ isLogged: true }));
        this.appController.navigate("home");
        this.appController.triggerCustomEvent("HandleAuthentication");
      } else {
        alert("Email ou senha inválidos.");
      }
    } else {
      alert("Por Favor preencha os dados de login obrigatórios.");
    }
  }

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
