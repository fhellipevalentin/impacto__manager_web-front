import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Errors } from '../errors/Errors';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

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
}
