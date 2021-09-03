import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';


const routes: Routes = [
    { path: 'login', redirectTo: '', pathMatch: 'full' },
    {
        path:'', // rota/:param
        component: LoginComponent,
        runGuardsAndResolvers: 'always'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        // resolvers
    ]
})
export class LoginRoutingModule { }