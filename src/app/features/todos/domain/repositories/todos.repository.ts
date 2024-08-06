import { Observable } from 'rxjs';
import { TodosDataEntity } from '../entities/todos-data.entity';
import { TodoEntity } from '../entities/todo.entity';
import { NewTodoEntity } from '../entities/new-todo.entity';
import { DeletedTodoEntity } from '../entities/deleted-todo.entity';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class TodosRepository {
  abstract getTodos(skip: number, limit: number): Observable<TodosDataEntity>;

  abstract getTodo(id: number): Observable<TodoEntity>;

  abstract createTodo(todo: NewTodoEntity): Observable<TodoEntity>;

  abstract updateTodo(updatedTodo: TodoEntity): Observable<TodoEntity>;

  abstract deleteTodo(id: number): Observable<DeletedTodoEntity>;
}
