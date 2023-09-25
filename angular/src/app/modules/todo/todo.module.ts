import * as en from './localization/en.json';
import * as ar from './localization/ar.json';

import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';

// components
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

const components = [
  TodoComponent,
  TodoListComponent,
  TodoFormComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
    TodoRoutingModule,
    CoreModule.forChild({
      localizations: [
        { culture: 'en', resources: [{ resourceName: 'Todo', texts: en }] },
        { culture: 'ar', resources: [{ resourceName: 'Todo', texts: ar }] },
      ],
    }),
  ]
})
export class TodoModule { }
