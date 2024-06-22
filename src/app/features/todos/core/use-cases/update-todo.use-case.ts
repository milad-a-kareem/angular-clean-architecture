import { Injectable } from '@angular/core';
import { TodosRepository } from '../repositories/todos.repository';
import { TodoEntity } from '../entities/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class UpdateTodoUseCase {
  constructor(private todosRepo: TodosRepository) {}

  execute(todo: TodoEntity) {
    return this.todosRepo.updateTodo(todo);
  }
}
