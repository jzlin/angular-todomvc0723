import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _todos: any[] = [];

  @Input('data')
  set todos(data: any[]) {
    this._todos = data;

    this.tooMore = this.todos.length > 5;
  }
  get todos(): any[] {
    return this._todos;
  }

  @Output() clearBtnClick = new EventEmitter();

  tooMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
