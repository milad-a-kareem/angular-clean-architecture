import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosRepository } from './domain/repositories/todos.repository';
import { TodosRepositoryImpl } from './data/repositories/api-todos.repository';
import { RemoteTodosDataSource } from './data/sources/remote-todos.data-source';
import { GetTodosUseCase } from './domain/use-cases/get-todos.use-case';
import { GetTodoUseCase } from './domain/use-cases/get-todo.use-case';
import { DeleteTodoUseCase } from './domain/use-cases/delete-todo.use-case';
import { UpdateTodoUseCase } from './domain/use-cases/update-todo.use-case';
import { CreateTodoUseCase } from './domain/use-cases/create-todo.use-case';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodosRoutingModule],
  providers: [
    RemoteTodosDataSource,
    { provide: TodosRepository, useClass: TodosRepositoryImpl },
    GetTodosUseCase,
    GetTodoUseCase,
    DeleteTodoUseCase,
    UpdateTodoUseCase,
    CreateTodoUseCase,
  ],
})
export class TodosModule {}
