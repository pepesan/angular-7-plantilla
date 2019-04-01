import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../services/libros-api.service';
import {Libro} from '../../models/libro';
import {Observable} from 'rxjs';
import {GetLibrosResponse} from '../../models/getLibrosResponse';

@Component({
  selector: 'app-list-libro',
  templateUrl: './list-libro.component.html',
  styleUrls: ['./list-libro.component.sass']
})
export class ListLibroComponent implements OnInit {

  constructor(
    private librosService: LibrosService
  ) { }
  librosResponse = null;
  libros;
  cargandoOculto = true;
  ngOnInit() {
    this.libros = [];
    this.actualiza();
  }
  actualiza() {
    console.log("actualiza");
    this.cargandoOculto = false;
    this.librosResponse = this.librosService.getData();
    this.librosResponse.subscribe((data) => {
      this.cargandoOculto = true;
      this.libros = data.libros;
      // console.log(this.libros);
    });
  }
  borra(id) {
    const respuestaObserver = this.librosService.deleteLibro(id);
    respuestaObserver.subscribe((data) => {
      console.log(data);
      this.actualiza();
    });
  }

}
