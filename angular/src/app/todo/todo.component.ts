import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '@abp/ng.core';
import { TodoService, TodoItemDto } from '@proxy';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todoItems: TodoItemDto[];
  newTodoText: string;

  constructor(
    private localizationSer: LocalizationService,
    private todoSer: TodoService,
    private toasterSer: ToasterService,
  ) {}

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

  createTodoItem(): void {
    this.todoSer.create(this.newTodoText)
      .subscribe({
        next: (result) => {
          this.todoItems = this.todoItems.concat(result);
          this.newTodoText = null;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteTodoItem(id: string): void {
    this.todoSer.delete(id)
      .subscribe(
        {
          next: () => {
            this.todoItems = this.todoItems.filter(item => item.id !== id);
            this.toasterSer.info(this.localizationSer.instant('::TodoItemDeleteMsg'));
          },
          error: (err) => {
            console.log(err);
          },
        }
      );
  }
}
