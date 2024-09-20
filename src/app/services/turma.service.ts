import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Errors } from "../errors/Errors";
import { Turmas } from "../model/Turma.model";
import { catchError, Observable, retry } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class TurmaService {

    constructor(private http: HttpClient) {

    }

    authorizationAccess = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    
    URLbase : string = environment.rootUrl;
    private errorHandle : Errors = new Errors;

    listarTurmas(): Observable<any> {
        return this.http.get<Turmas[]>(`${this.URLbase}/api/turma/`)
            .pipe(
                retry(1),
                catchError(this.errorHandle.appError)
            );
    }
}