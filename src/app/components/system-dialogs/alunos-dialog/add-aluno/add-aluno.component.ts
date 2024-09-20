import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardTitle } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alunos } from 'src/app/model/Alunos.model';
import { Turmas } from 'src/app/model/Turma.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-add-aluno',
  standalone: true,
  imports: [ MatSelectModule, MatIconModule, MatInputModule, CommonModule, MatFormFieldModule, ReactiveFormsModule, MatButton, MatCard, MatCardTitle, MatCardActions, MatDatepickerModule],
  templateUrl: './add-aluno.component.html',
  styleUrl: './add-aluno.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AddAlunoComponent implements OnInit{

  public formulary = this.montarForm();

  alunoControl: FormControl = new FormControl('');
  turmaControl: FormControl = new FormControl('');

  alunoList: any = [];
  turmaList: any = [];
  


constructor(
  public dialogRef: MatDialogRef<AddAlunoComponent>,
  @Inject(MAT_DIALOG_DATA) public aluno: Alunos,
  private alunoService: AlunoService,
  private turmaService: TurmaService,
  private formBuilder: FormBuilder,
  private snackBar: MatSnackBar
) {}

ngOnInit(): void {
this.mostrarDados();
}

mostrarDados() {
  this.turmaService.listarTurmas().subscribe((data: {}) => {
    this.turmaList = data
    console.log(this.turmaList)
  })
}

montarForm() {
  return this.formBuilder.group({
    id: [''],
    nome: new FormControl ('', Validators.required),
    cpf: new FormControl ('', Validators.required),
    sexo: new FormControl ('', Validators.required),
    dataNascimento: new FormControl ('', Validators.required),
    telefone: new FormControl ('', Validators.required),
    cep: new FormControl ('', Validators.required),
    rua: new FormControl ('', Validators.required),
    bairro: new FormControl ('', Validators.required),
    cidade: new FormControl ('', Validators.required),
    numeroCasa: new FormControl ('', Validators.required),
    complemento: new FormControl ('', Validators.required),
    responsavel01: new FormControl ('', Validators.required),
    telefoneResponsavel01: new FormControl ('', Validators.required),
    responsavel02: new FormControl ('', Validators.required),
    telefoneResponsavel02: new FormControl ('', Validators.required), 

    turmas: this.formBuilder.array<Turmas>([]),
    
  })
}

get turmaFormArray() {
  return this.formulary.controls['turmas'] as FormArray; 
}

addTurma() {
  const turmaForm = this.formBuilder.group({
    id: [this.turmaControl.value, Validators.required],
    nome: ['', Validators.required]
  })
  this.turmaFormArray.push(turmaForm);
}

deleteTurma(turmaIndex: number) {
  this.turmaFormArray.removeAt(turmaIndex);
}

submit() {
  this.alunoService.inserirAluno(this.formulary.value).subscribe(data => {
    this.snackBar.open('Aluno adicionado com sucesso', 'Fechar', {
      duration: 5000
    });
    this.close()
    console.log(data)
  })
}

close() {
  this.dialogRef.close();
}

}
