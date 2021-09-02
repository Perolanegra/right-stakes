import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from "./components/menu/menu.component";
import { BoxbalancePipe } from './pipes/boxbalance.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MenuComponent,
    HeaderComponent,
    BoxbalancePipe
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    BoxbalancePipe
  ],
  providers: [
    CurrencyPipe
  ],
  entryComponents: [], // dialogs providers
})
export class SharedModule {}
