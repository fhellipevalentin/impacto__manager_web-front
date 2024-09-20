import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AddTurmaComponent } from 'src/app/components/system-dialogs/turma/add-turma/add-turma.component';
import { Alunos } from 'src/app/model/Alunos.model';
import { Turmas } from 'src/app/model/Turma.model';
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
    MatIconModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './aluno-edit.component.html',
  styleUrl: './aluno-edit.component.css'
})
export class AlunoEditComponent implements OnInit {

  aluno!:Alunos;
  turmas!: Turmas;

  constructor(
    public route: ActivatedRoute,
    public alunoService: AlunoService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    public router: Router
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
        console.log(aluno)
      }
    })
  }

  submit() {
    this.alunoService.editAluno(this.aluno.id, this.aluno).subscribe(
      () => {
        this.snackBar.open('Aluno atualizado com sucesso!', 'Fechar', {
          duration: 3000,
        });
      this.router.navigate(['aluno-list'])
      console.log(this.aluno)
      },
      (error) => {
        console.error('Erro ao atualizar o aluno:', error);
        this.snackBar.open('Erro ao atualizar o aluno.', 'Fechar', {
          duration: 3000,
        });
      }   
    )
  }

  addTurma() {
    this.aluno.turmas.push(new Turmas());  
  }

  removeTurma(index: number) {
    this.aluno.turmas.splice(index, 1);
  }

  openDialog(aluno: Alunos): void {
    this.dialog.open(AddTurmaComponent, {
      width: '250px',
      data: aluno
    })
  }

}
