import { Injectable, inject } from '@angular/core';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class GetTodoUseCase {
  todosRepository = inject(TodosRepository);

  execute(id: number) {
    return this.todosRepository.getTodo(id);
  }
}
