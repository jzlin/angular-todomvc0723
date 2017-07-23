import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";

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
  apiUrl = 'http://localhost:3000/todos';

  constructor(private http: Http) {}

  ngOnInit() {
    this.getTodosFromApi();
  }

  private getTodosFromApi() {
    this.http.get(this.apiUrl).subscribe(res => {
      this.todos = res.json();
    });
  }

  addTodo() {
    if (this.todo) {
      this.http.post(this.apiUrl, {
        text: this.todo,
        done: false
      }).subscribe(res => {
        this.todos = [...this.todos, res.json()];
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
          return this.http.put(`${this.apiUrl}/${item.id}`, item);
        })
    ).subscribe(res => {
      this.getTodosFromApi();
    });
  }

  updateTodo(todo) {
    this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe();
  }

  removeTodo(todo) {
    this.http.delete(`${this.apiUrl}/${todo.id}`).subscribe(res => {
      this.todos = this.todos.filter(item => item != todo);
    });
  }

}
