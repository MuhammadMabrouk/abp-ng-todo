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
    this.todoSer.getList().subscribe(res => this.todoItems = res);
  }

  createTodoItem(todoItem: TodoItemDto): void {
    this.todoItems = this.todoItems.concat(todoItem);
  }

  deleteTodoItem(id: string): void {
    this.todoItems = this.todoItems.filter(item => item.id !== id);
  }
}
