import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Errors } from '../errors/Errors';
import { catchError, Observable, retry } from 'rxjs';
import { Alunos } from '../model/Alunos.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  authorizationAccess = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  URLbase : string = environment.rootUrl;
  private errorHandle : Errors = new Errors;

  constructor( private http: HttpClient ) {
    }

  listarDadosPaginados(pagina: number, linhasPorPagina: number): Observable<any> {
    const params = new HttpParams()
    .set('page', pagina)
    .set('size', linhasPorPagina)
    return this.http.get<any> (`${this.URLbase}/api/aluno/page?${params.toString()}`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  acessarAlunoPorId(id: any): Observable<Alunos>{
    return this.http.get<Alunos>(`${this.URLbase}/api/aluno/${id}`)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  inserirAluno(novoRegistro: any): Observable<Alunos> {
    return this.http.post<Alunos>(`${this.URLbase}/api/aluno`, novoRegistro)
    .pipe(
        retry(1),
        catchError(this.errorHandle.appError)
    )
  }

  editAluno(id:any, novoRegistro: any): Observable<Alunos> {
    return this.http.put<Alunos>(`${this.URLbase}/api/aluno/${id}`, novoRegistro)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }

  deletarAlunoPorId(id: any) {
    return this.http.delete<Alunos>(`${this.URLbase}/api/aluno/${id}`, this.authorizationAccess)
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }
}
