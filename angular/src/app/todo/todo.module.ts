import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
