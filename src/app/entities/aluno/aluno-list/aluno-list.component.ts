import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { Alunos } from 'src/app/model/Alunos.model';
import { AlunoService } from '../../../services/aluno.service';
import { PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-aluno-list',
    standalone: true,
    imports: [NavbarComponent, MatTableModule, MatCardModule, MatPaginator],
    templateUrl: './aluno-list.component.html',
    styleUrl: './aluno-list.component.css',
})
export class AlunoListComponent implements OnInit{

    constructor(private alunoService: AlunoService ) {

    }

    ngOnInit(): void {
        this.showData(this.pagina, this.tamanho)
    }

    alunoList: Alunos[] = [];

    displayedColumns: string[] = ['id', 'nome', 'cpf', 'sexo', 'dataNascimento', 'telefone'];
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
}
