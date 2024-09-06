import { map } from 'rxjs';
import { Injectable } from '@angular/core';

import { TodoMapper } from '../mappers/todo.mapper';
import { TodosPageMapper } from '../mappers/todos-page.mapper';
import { DeletedTodoMapper } from '../mappers/deleted-todo.mapper';

import { TodoEntity } from '../../core/entities/todo.entity';
import { NewTodoEntity } from '../../core/entities/new-todo.entity';

import { TodosRepository } from '../../core/repositories/todos.repository';

import { RemoteTodosDataSource } from '../data-sources/remote-todos.data-source';


@Injectable()
export class TodosRepositoryImpl implements TodosRepository {
  constructor(private remoteTodos: RemoteTodosDataSource) {}

  getTodos(skip: number, limit: number) {
    return this.remoteTodos
      .getTodos(skip, limit)
      .pipe(map((response) => TodosPageMapper.toEntity(response)));
  }

  getTodo(id: number) {
    return this.remoteTodos
      .getTodo(id)
      .pipe(map((response) => TodoMapper.toEntity(response)));
  }

  createTodo(todo: NewTodoEntity) {
    return this.remoteTodos
      .createTodo(todo)
      .pipe(map((response) => TodoMapper.toEntity(response)));
  }
  updateTodo(updatedTodo: TodoEntity) {
    return this.remoteTodos
      .updateTodo(updatedTodo)
      .pipe(map((response) => TodoMapper.toEntity(response)));
  }
  deleteTodo(id: number) {
    return this.remoteTodos
      .deleteTodo(id)
      .pipe(map((response) => DeletedTodoMapper.toEntity(response)));
  }
}
