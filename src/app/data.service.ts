import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DataService {

  apiUrl = 'http://localhost:3000/todos';

  constructor(private http: Http) { }

  getTodos() {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  addTodo(todo) {
    return this.http.post(this.apiUrl, todo)
      .map(res => res.json());
  }

  removeTodo(todo) {
    return this.http.delete(`${this.apiUrl}/${todo.id}`)
      .map(res => res.json());
  }

  updateTodo(todo) {
    return this.http.put(`${this.apiUrl}/${todo.id}`, todo)
      .map(res => res.json());
  }

}
