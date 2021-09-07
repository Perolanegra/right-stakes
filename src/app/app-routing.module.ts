import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },

  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "tournament",
    loadChildren: () =>
      import("./modules/tournament/tournament.module").then(
        (m) => m.TournamentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
