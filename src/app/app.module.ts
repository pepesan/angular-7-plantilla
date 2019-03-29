import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { TodosComponent } from './components/todos/todos.component';
import {TodoService} from './services/todo.service';
// import {LibrosService} from './services/libros.service';
import {LibrosService} from './services/libros-api.service';
import { ListLibroComponent } from './components/list-libro/list-libro.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ListLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    LibrosService,
    { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
