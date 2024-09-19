import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alunos } from 'src/app/model/Alunos.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-aluno',
  standalone: true,
  imports: [MatButton, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './delete-aluno.component.html',
  styleUrl: './delete-aluno.component.css'
})
export class DeleteAlunoComponent {

  constructor(
    public dialogRef:MatDialogRef<DeleteAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public aluno: Alunos,
    public alunoService: AlunoService,
    private snackBar: MatSnackBar

  ) {}

  close() {
    this.dialogRef.close();
  }

  confirmaDelete(id: any) {
    this.alunoService.deletarAlunoPorId(id).subscribe(() => {
      this.dialogRef.close();
    })
    this.snackBar.open('O livro foi deletado', 'Sucesso', {
      duration: 2000
    })
  }
}
