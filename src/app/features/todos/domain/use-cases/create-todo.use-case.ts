import { Injectable, inject } from '@angular/core';
import { NewTodoEntity } from '../entities/new-todo.entity';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoUseCase {
  todosRepository = inject(TodosRepository);

  execute(newTodo: NewTodoEntity) {
    return this.todosRepository.createTodo(newTodo);
  }
}
