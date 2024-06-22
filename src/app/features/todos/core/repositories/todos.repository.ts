import { Observable } from 'rxjs';
import { TodosDataEntity } from '../entities/todos-data.entity';
import { TodoEntity } from '../entities/todo.entity';
import { NewTodoEntity } from '../entities/new-todo.entity';
import { DeletedTodoEntity } from '../entities/deleted-todo.entity';

export abstract class TodosRepository {
  abstract getTodos(): Observable<TodosDataEntity>;

  abstract getTodo(id: number): Observable<TodoEntity>;

  abstract createTodo(todo: NewTodoEntity): Observable<TodoEntity>;

  abstract updateTodo(updatedTodo: TodoEntity): Observable<TodoEntity>;

  abstract deleteTodo(id: number): Observable<DeletedTodoEntity>;
}
