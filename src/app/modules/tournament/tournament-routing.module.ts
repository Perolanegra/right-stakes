import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TournamentComponent } from './tournament.component';
import { TournamentResolver } from './tournament.resolver';
import { TournamentAuthGuard } from '../core/guards/tournament-auth.guard';


const routes: Routes = [
    {
        path:'details/:id/:name', // rota/:param
        component: TournamentComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
            details: TournamentResolver
        },
        pathMatch: 'full',
        canActivate: [TournamentAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        // resolvers
        TournamentResolver,
        TournamentAuthGuard
    ]
})
export class TournamentRoutingModule { }