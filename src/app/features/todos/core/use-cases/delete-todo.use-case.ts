import { Injectable } from '@angular/core';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteTodoUseCase {
  constructor(private todosRepo: TodosRepository) {}

  execute(id: number) {
    return this.todosRepo.deleteTodo(id);
  }
}
