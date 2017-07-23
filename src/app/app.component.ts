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
  filterType: string = 'All';

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

  clearCompleted() {
    this.todos = this.todos.filter(item => !item.done);
  }

  filterTodos(event) {
    this.filterType = event;
  }

}
