import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string = '';
  filterType: string = 'All';
  isToggleAll: boolean = false;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.getTodosFromApi();
  }

  getTodosFromApi() {
    this.dataSvc.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  addTodo() {
    if (this.todo) {
      this.dataSvc.addTodo({
        text: this.todo,
        done: false
      }).subscribe(data => {
        this.todos = [...this.todos, data];
        this.todo = '';
      });
    }
  }

  todoChange(event) {
    this.todo = event;
  }

  clearCompleted() {
    this.todos
      .filter(item => item.done)
      .forEach(item => {
        this.removeTodo(item);
      });
  }

  filterTodos(event) {
    this.filterType = event;
  }

  toggleAll(event) {
    Observable.forkJoin(
      this.todos
        .map(item => {
          item.done = event;
          return item;
        })
        .map(item => {
          return this.dataSvc.updateTodo(item);
        })
    ).subscribe(res => {
      this.getTodosFromApi();
    });
  }

  updateTodo(todo) {
    this.dataSvc.updateTodo(todo).subscribe();
  }

  removeTodo(todo) {
    this.dataSvc.removeTodo(todo).subscribe(data => {
      this.todos = this.todos.filter(item => item !== todo);
    });
  }

}
