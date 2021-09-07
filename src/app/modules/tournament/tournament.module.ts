import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TournamentComponent } from "./tournament.component";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";
import { TournamentRoutingModule } from "./tournament-routing.module";

@NgModule({
  declarations: [TournamentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    TournamentRoutingModule,
  ],
  exports: [TournamentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TournamentModule {}
