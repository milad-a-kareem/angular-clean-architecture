import { map } from 'rxjs';
import { NewTodoEntity } from '../../core/entities/new-todo.entity';
import { TodoEntity } from '../../core/entities/todo.entity';
import { TodosRepository } from '../../core/repositories/todos.repository';
import { RemoteTodosDataSource } from '../data-sources/remote-todos.data-source';
import { NewTodoRequestDto } from '../models/new-todo-request.dto';
import { TodoResponseDto } from '../models/todo-response.dto';
import { Injectable } from '@angular/core';
import { TodosResponseDto } from '../models/todos-response.dto';
import { DeletedTodoResponseDto } from '../models/deleted-todo-response.dto';

@Injectable()
export class TodosRepositoryImpl implements TodosRepository {
  constructor(private remoteTodos: RemoteTodosDataSource) {}

  getTodos(skip: number, limit: number) {
    return this.remoteTodos.getTodos(skip,limit).pipe(
      map((response) => {
        const dto = new TodosResponseDto(
          response.todos,
          response.total,
          response.skip,
          response.limit
        );

        return dto.toEntity();
      })
    );
  }

  getTodo(id: number) {
    return this.remoteTodos.getTodo(id).pipe(
      map((response) => {
        const dto = new TodoResponseDto(
          response.id,
          response.todo,
          response.userId,
          response.completed
        );
        return dto.toEntity();
      })
    );
  }

  createTodo(todo: NewTodoEntity) {
    return this.remoteTodos.createTodo(NewTodoRequestDto.fromEntity(todo)).pipe(
      map((response) => {
        const dto = new TodoResponseDto(
          response.id,
          response.todo,
          response.userId,
          response.completed
        );
        return dto.toEntity();
      })
    );
  }
  updateTodo(updatedTodo: TodoEntity) {
    return this.remoteTodos
      .updateTodo(TodoResponseDto.fromEntity(updatedTodo))
      .pipe(
        map((response) => {
          const dto = new TodoResponseDto(
            response.id,
            response.todo,
            response.userId,
            response.completed
          );
          return dto.toEntity();
        })
      );
  }
  deleteTodo(id: number) {
    return this.remoteTodos.deleteTodo(id).pipe(
      map((response) => {
        const dto = new DeletedTodoResponseDto(
          response.id,
          response.todo,
          response.userId,
          response.completed,
          response.isDeleted
        );
        return dto.toEntity();
      })
    );
  }
}
