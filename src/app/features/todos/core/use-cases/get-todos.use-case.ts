import { Injectable } from '@angular/core';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class GetTodosUseCase {
  constructor(private todosRepo: TodosRepository) {}

  execute() {
    return this.todosRepo.getTodos();
  }
}
