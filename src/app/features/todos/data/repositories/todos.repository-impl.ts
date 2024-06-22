import { map } from 'rxjs';
import { NewTodoEntity } from '../../core/entities/new-todo.entity';
import { TodoEntity } from '../../core/entities/todo.entity';
import { TodosRepository } from '../../core/repositories/todos.repository';
import { RemoteTodosDataSource } from '../data-sources/remote-todos.data-source';
import { NewTodoRequestDto } from '../models/new-todo-request.dto';
import { TodoResponseDto } from '../models/todo-response.dto';

export class TodosRepositoryImpl implements TodosRepository {
  constructor(private remoteTodos: RemoteTodosDataSource) {}

  getTodos() {
    return this.remoteTodos
      .getTodos()
      .pipe(map((response) => response.toEntity()));
  }
  getTodo(id: number) {
    return this.remoteTodos
      .getTodo(id)
      .pipe(map((response) => response.toEntity()));
  }
  createTodo(todo: NewTodoEntity) {
    return this.remoteTodos
      .createTodo(NewTodoRequestDto.fromEntity(todo))
      .pipe(map((response) => response.toEntity()));
  }
  updateTodo(updatedTodo: TodoEntity) {
    return this.remoteTodos
      .updateTodo(TodoResponseDto.fromEntity(updatedTodo))
      .pipe(map((response) => response.toEntity()));
  }
  deleteTodo(id: number) {
    return this.remoteTodos
      .deleteTodo(id)
      .pipe(map((response) => response.toEntity()));
  }
}
