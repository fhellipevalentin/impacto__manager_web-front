import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Alunos } from 'src/app/model/Alunos.model';
import { Turmas } from 'src/app/model/Turma.model';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-add-turma',
  standalone: true,
  imports: [MatButtonModule, CommonModule, FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './add-turma.component.html',
  styleUrl: './add-turma.component.css'
})
export class AddTurmaComponent implements OnInit{

  turmaSelecionada!: Turmas;
  turmaList!: Turmas[];

  constructor(
    public dialogRef: MatDialogRef<AddTurmaComponent>,
    @Inject(MAT_DIALOG_DATA) public aluno: Alunos,
    public turmaService: TurmaService
  ){

  }

  ngOnInit(): void {
    this.mostrarDados();
    console.log(this.aluno)
  }

  mostrarDados() {
    this.turmaService.listarTurmas().subscribe((dadosTurma) => {
      this.turmaList = dadosTurma;
      console.log(dadosTurma)
    })
  }

  addTurma(obj: Turmas) {
    this.aluno.turmas.push(new Turmas({id: obj.id, nome: obj.nome}))
    console.log(obj.nome)
  }

  incluirTurma() {
    console.log(this.turmaSelecionada)
    this.addTurma(this.turmaSelecionada)
    this.dialogRef.close()
  }

}
