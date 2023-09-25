import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalizationService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { TodoService } from '@proxy';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() items: any[] = [];

  @Output() onDeleteItem = new EventEmitter<string>;

  lang: string;

  constructor(
    private localizationSer: LocalizationService,
    private todoSer: TodoService,
    private toasterSer: ToasterService,
  ) {}

  ngOnInit(): void {
    this.initAppLanguage();
  }

  initAppLanguage(): void {
    this.lang = this.localizationSer.currentLang;
  }

  deleteTodoItem(id: string): void {
    this.todoSer.delete(id)
      .subscribe(
        {
          next: () => {
            this.onDeleteItem.emit(id);
            this.toasterSer.info(this.localizationSer.instant('Todo::TodoItemDeleteMsg'));
          },
          error: (err) => {
            console.log(err);
          },
        }
      );
  }
}
