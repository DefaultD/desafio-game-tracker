import { Observable } from 'rxjs';
import { Oferta } from './ofertas';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private readonly API = 'http://localhost:3000/listaDeJogos'
  constructor(private http: HttpClient) { }

  listar(): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(this.API)
  }

  criar(oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.API, oferta)
  }

  editar(oferta: Oferta): Observable<Oferta>{
    const url = `${this.API}/${oferta.id}`
    return this.http.put<Oferta>(url, oferta)
  }

  excluir(id: number): Observable<Oferta>{
    const url = `${this.API}/${id}`
    return this.http.delete<Oferta>(url)
  }

  buscarPorId(id: number): Observable<Oferta>{
    const url = `${this.API}/${id}`
    return this.http.get<Oferta>(url)
  }
}
