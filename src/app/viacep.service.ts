import { Injectable } from '@angular/core';
import { ICep } from './icep';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ViacepService {

  apiLink: string = "https://viacep.com.br/ws/"

  constructor(private http: HttpClient) { }

  // Consulta a api
  List(cep: string): Observable<ICep> {
    return this.http.get<ICep>(`https://viacep.com.br/ws/${cep}/json/`).pipe();
  }
}
