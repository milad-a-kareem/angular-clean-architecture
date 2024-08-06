import { Injectable, inject } from '@angular/core';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class GetTodosUseCase {
  todosRepository = inject(TodosRepository);

  execute(skip: number, limit: number) {
    return this.todosRepository.getTodos(skip, limit);
  }
}
