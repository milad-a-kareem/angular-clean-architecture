import { Observable } from 'rxjs';
import { TodosPageEntity } from '../entities/todos-page.entity';
import { TodoEntity } from '../entities/todo.entity';
import { NewTodoEntity } from '../entities/new-todo.entity';
import { DeletedTodoEntity } from '../entities/deleted-todo.entity';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class TodosRepository {
  abstract getTodos(skip: number, limit: number): Observable<TodosPageEntity>;

  abstract getTodo(id: number): Observable<TodoEntity>;

  abstract createTodo(todo: NewTodoEntity): Observable<TodoEntity>;

  abstract updateTodo(updatedTodo: TodoEntity): Observable<TodoEntity>;

  abstract deleteTodo(id: number): Observable<DeletedTodoEntity>;
}
