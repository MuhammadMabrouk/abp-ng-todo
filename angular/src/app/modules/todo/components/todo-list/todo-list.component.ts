import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalizationService } from '@abp/ng.core';
import { ConfirmationService, Confirmation, ToasterService } from '@abp/ng.theme.shared';
import { TodoService } from '@proxy';
import { take } from 'rxjs/operators';

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
    private confirmationSer: ConfirmationService,
    private toasterSer: ToasterService,
  ) {}

  ngOnInit(): void {
    this.initAppLanguage();
  }

  initAppLanguage(): void {
    this.lang = this.localizationSer.currentLang;
  }

  deleteTodoItem(id: string): void {
    this.confirmationSer
      .warn('Todo::TodoItemConfirmDeleteMsg', 'Todo::TodoItemConfirmDeleteTitle')
      .pipe(take(1))
      .subscribe((status: Confirmation.Status) => {
        if (status == 'confirm') {
          this.todoSer.delete(id)
            .subscribe(() => {
              this.onDeleteItem.emit(id);
              this.toasterSer.info('Todo::TodoItemDeleteMsg');
            });
        }
      });
  }
}
