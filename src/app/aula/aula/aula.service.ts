import { Aula } from './aula.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class AulaService {
  private API = 'http://localhost:8080/api/v1/aulas';

  constructor(private httpClient: HttpClient) { }

  save(Aula: Aula): Observable<Aula> {
    return this.httpClient.post<Aula>(this.API, Aula);
  }
  listarAulas(): Observable<any> {
    return this.httpClient.get(this.API);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
  update(id?: number, Aula?: Aula): Observable<any> {
    return this.httpClient.put(`${this.API}/${id}`, Aula);
  }
  buscarPorId(id: number): Observable<any>{
    return this.httpClient.get(`${this.API}/${id}`);
    }
    

}