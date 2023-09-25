import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItemDto } from '@proxy';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todoItems: TodoItemDto[];

  constructor(private todoSer: TodoService) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoSer.getList()
      .subscribe({
        next: (res) => {
          this.todoItems = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  createTodoItem(todoItem: TodoItemDto): void {
    this.todoItems = this.todoItems.concat(todoItem);
  }

  deleteTodoItem(id: string): void {
    this.todoItems = this.todoItems.filter(item => item.id !== id);
  }
}
