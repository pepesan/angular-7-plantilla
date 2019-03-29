import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Partido} from '../models/partido';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://cursosdedesarrollo.com/pactometro/resultados.json';
  listadoTodos;
  todoInicial;
  precioInicial;
  fechaInicial;
  constructor(private httpClient: HttpClient) {
    this.listadoTodos = new Array();
    this.listadoTodos.push({text: 'hacer la compra'});
    this.listadoTodos.push({text: 'revisar el coche'});
    this.fechaInicial = new Date();
    this.precioInicial = 32.5;
    this.todoInicial = {
      text: ''
    };
  }

  getData() {
    return this.httpClient
      .get<Observable<Partido[]>>(this.url)
      .pipe(
        retry(3),
        catchError(
          this.handleError('get', [])
        )
      );
  }
  private handleError(operation = 'operation', result?) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }
  /* Ejemplo de llamada POST
  addItem (objeto: ClaseObjeto): Observable<ClaseObjeto> {
    return this.http.post<Observable<ClaseObjeto>>
      (url, objeto, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }
  */

  getListado() {
    return this.listadoTodos;
  }
  getFecha() {
    return this.fechaInicial;
  }
  getTodo() {
    return this.todoInicial;
  }
  getPrecio() {
    return this.precioInicial;
  }
}
