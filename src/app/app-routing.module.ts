import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './entities/aluno/aluno-list/aluno-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'aluno-list', component: AlunoListComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
