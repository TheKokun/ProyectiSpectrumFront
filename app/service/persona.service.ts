import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../models/personas';
import { Preguntas } from '../models/preguntas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //esta URL obtiene el listado de personas y conexion con java
  personaUrl = 'http://localhost:8080/persona/';
  preguntasUrl = 'http://localhost:8080/questionario/';

  constructor(private httpClient: HttpClient) { }
  

  public listaPreguntas(): Observable<Preguntas[]> {
    return this.httpClient.get<Preguntas[]>(this.preguntasUrl + 'lista');
  }
  //para personas
  public lista(): Observable<Personas[]> {
    return this.httpClient.get<Personas[]>(this.personaUrl + 'lista');
  }

  public detail(id: number): Observable<Personas> {
    return this.httpClient.get<Personas>(this.personaUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Personas> {
    return this.httpClient.get<Personas>(this.personaUrl + `detailname/${nombre}`);
  }

  public save(persona: Personas): Observable<any> {
    return this.httpClient.post<any>(this.personaUrl + 'create', persona);
  }

  public update(id: number, persona?: Personas): Observable<any> {
    return this.httpClient.put<any>(this.personaUrl + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaUrl + `delete/${id}`);
  }
}
