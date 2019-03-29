import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Libro} from '../models/libro';
import {GetLibrosResponse} from '../models/getLibrosResponse';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Partido} from '../models/partido';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url = 'http://localhost:3000/api/libros';
  constructor(private httpClient: HttpClient) {
    console.log('Servicio Cargado');
  }
  getLibros(){
    /*
    let libro = {
      _id:"122131421",
      titulo:"asdasd",
      autor:"salkfdjalfkj",
      isbn:"124e145623576467"
    };
    let librosResponse = {
      'res': 'Success',
      'libros': [libro]
    };
     */
  }
  getData() {
    return this.httpClient
      .get<Observable<any>>(this.url)
      .pipe(
        retry(3),
        catchError(
          this.handleError('get', [])
        )
      );
  }
  deleteLibro(id) {
    return this.httpClient
      .delete<Observable<any>>(this.url + '/' + id)
      .pipe(
        retry(3),
        catchError(
          this.handleError('delete', [])
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
}
