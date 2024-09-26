import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AlunoEditComponent } from "./entities/aluno/aluno-edit/aluno-edit.component";
import { AlunoListComponent } from "./entities/aluno/aluno-list/aluno-list.component";
import { AuthActivateRouteGuard } from "./routeguards/auth.routeguard";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent} ,
    { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthActivateRouteGuard ] },
    { path: 'aluno/:id', component: AlunoEditComponent, canActivate: [ AuthActivateRouteGuard ] },
    { path: 'aluno-list', component: AlunoListComponent, canActivate: [ AuthActivateRouteGuard ] },
    { path: 'login', component: LoginComponent },
];