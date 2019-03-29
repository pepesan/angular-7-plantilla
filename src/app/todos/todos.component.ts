import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  ngOnInit() {
    this.fecha = new Date();
    this.precio = 32.5;
    this.todo = {
      text: ''
    };
    this.todos = new Array();
    this.todos.push({text: 'hacer la compra'});
    this.todos.push({text: 'revisar el coche'});
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
