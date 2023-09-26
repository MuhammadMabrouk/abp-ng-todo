import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItemDto, TodoService } from '@proxy';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() onCreateItem = new EventEmitter<TodoItemDto>;

  newTodoEnglishText: string;
  newTodoArabicText: string;

  constructor(private todoSer: TodoService) {}

  createTodoItem(): void {
    this.todoSer.create(this.newTodoEnglishText, this.newTodoArabicText)
      .subscribe(result => {
        this.onCreateItem.emit(result);
        this.newTodoEnglishText = this.newTodoArabicText = null;
      });
  }
}
