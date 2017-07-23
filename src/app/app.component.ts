import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  todos: any[] = [];

  addTodo(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === 13) {
      console.log('enter');
      let inputElem = <HTMLInputElement>event.target;
      this.todos.push(inputElem.value);
    }
  }

}
