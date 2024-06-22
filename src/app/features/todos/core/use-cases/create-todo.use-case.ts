import { Injectable } from '@angular/core';
import { NewTodoEntity } from '../entities/new-todo.entity';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoUseCase {
  constructor(private todosRepo: TodosRepository) {}

  execute(newTodo: NewTodoEntity) {
    return this.todosRepo.createTodo(newTodo);
  }
}
