import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos;
  todo: any;
  precio;
  fecha;
  partidos;
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.partidos = this.todoService.getData();
    this.fecha = this.todoService.getFecha();
    this.precio = this.todoService.getPrecio();
    this.todo = this.todoService.getTodo();
    this.todos = this.todoService.getListado();
  }

  addTodo() {
    const mitodo = {text: this.todo.text};
    this.todos.push(mitodo);
    this.todo.text = '';
  }
  deleteTodo(texto) {
    for ( let i = 0; i < this.todos.length; i++) {
      const todo = this.todos[i];
      if ( todo.text === texto ) {
        this.todos.splice(i, 1);
        this.todo.text = '';
        break;
      }
    }
  }

}
