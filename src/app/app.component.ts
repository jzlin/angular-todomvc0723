import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string = '';

  addTodo() {
    if (this.todo) {
      this.todos = [...this.todos, {
        text: this.todo,
        done: false
      }];
      this.todo = '';
    }
  }

  todoChange(event) {
    this.todo = event;
  }

}
