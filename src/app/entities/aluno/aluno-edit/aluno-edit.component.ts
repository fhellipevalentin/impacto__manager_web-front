import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule, MatCardTitle } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Alunos } from 'src/app/model/Alunos.model';
import { AlunoService } from 'src/app/services/aluno.service';


@Component({
  selector: 'app-aluno-edit',
  standalone: true,
  imports: [ 
    FormsModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatIconModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './aluno-edit.component.html',
  styleUrl: './aluno-edit.component.css'
})
export class AlunoEditComponent implements OnInit {

  aluno!:Alunos;

  constructor(
    public route: ActivatedRoute,
    public alunoService: AlunoService
  ) {
    this.aluno = new Alunos();
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(p => p['id']),
      switchMap(id => {
        return this.alunoService.acessarAlunoPorId(id);
      })
    ).subscribe({
      next: aluno => {
        this.aluno = aluno;
      }
    })
  }

  submit() {

  }

}
