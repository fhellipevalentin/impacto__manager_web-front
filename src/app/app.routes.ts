import { Routes } from "@angular/router";
import { AlunoListComponent } from "./entities/aluno/aluno-list/aluno-list.component";
import { HomeComponent } from "./components/home/home.component";
import { AlunoEditComponent } from "./entities/aluno/aluno-edit/aluno-edit.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'aluno/:id', component: AlunoEditComponent },
    { path: 'aluno-list', component: AlunoListComponent }
];