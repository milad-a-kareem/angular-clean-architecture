import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosRepository } from './core/repositories/todos.repository';
import { TodosRepositoryImpl } from './data/repositories/todos.repository-impl';
import { RemoteTodosDataSource } from './data/data-sources/remote-todos.data-source';
import { GetTodosUseCase } from './core/use-cases/get-todos.use-case';
import { GetTodoUseCase } from './core/use-cases/get-todo.use-case';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodosRoutingModule],
  providers: [
    RemoteTodosDataSource,
    { provide: TodosRepository, useClass: TodosRepositoryImpl },
    GetTodosUseCase,
    GetTodoUseCase,
  ],
})
export class TodosModule {}
