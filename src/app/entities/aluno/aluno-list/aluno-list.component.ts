import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Alunos } from 'src/app/model/Alunos.model';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AlunoService } from '../../../services/aluno.service';

import { MatButton } from '@angular/material/button';
import {
    MatDialog
} from '@angular/material/dialog';
import { AddAlunoComponent } from 'src/app/components/system-dialogs/alunos-dialog/add-aluno/add-aluno.component';
import { DeleteAlunoComponent } from 'src/app/components/system-dialogs/alunos-dialog/delete-aluno/delete-aluno.component';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-aluno-list',
    standalone: true,
    imports: [NavbarComponent, MatTableModule, MatCardModule, MatPaginator, RouterModule, MatIconModule, MatButton],
    templateUrl: './aluno-list.component.html',
    styleUrl: './aluno-list.component.css',
})
export class AlunoListComponent implements OnInit{

    constructor(private alunoService: AlunoService ) {

    }

    readonly dialog = inject(MatDialog);

    ngOnInit(): void {
        this.showData(this.pagina, this.tamanho)
    }

    alunoList: Alunos[] = [];

    displayedColumns: string[] = ['id', 'nome', 'cpf', 'sexo', 'dataNascimento', 'telefone', 'options'];
    totalElementos = 0
    pagina = 0
    tamanho = 10
    ordem = 'id'
    direcao = 'ASC'
    pageSizeOptions: number[] = [10]


    showData(pagina=0, tamanho=5) {
        this.alunoService.listarDadosPaginados(pagina, tamanho).subscribe(data => {
            this.alunoList = data.content
            this.totalElementos = data.totalElements
            this.pagina = data.number
        })
    }

    paginar(event: PageEvent) {
        this.pagina = event.pageIndex
        this.showData(this.pagina, this.tamanho)
    }

    openDialogDeletarAluno(aluno: Alunos) {
        this.dialog.open(DeleteAlunoComponent, {
            width: '300px',
            data: aluno,
        })
      }
    
    openDialogAddAluno() {
        this.dialog.open(AddAlunoComponent, {
            width: '485px',
            height: '800px'
        })
    }

}
