import { Injectable, inject } from '@angular/core';
import { TodosRepository } from '../repositories/todos.repository';
import { TodoEntity } from '../entities/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class UpdateTodoUseCase {
  todosRepository = inject(TodosRepository);

  execute(todo: TodoEntity) {
    return this.todosRepository.updateTodo(todo);
  }
}
