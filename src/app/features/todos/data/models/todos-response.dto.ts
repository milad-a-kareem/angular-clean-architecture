import { TodosDataEntity } from '../../core/entities/todos-data.entity';
import { TodoResponseDto } from './todo-response.dto';

export class TodosResponseDto {
  constructor(
    public todos: TodoResponseDto[],
    public total: number,
    public skip: number,
    public limit: number
  ) {}

  toEntity() {
    const todosEntity = this.todos.map((todo) => {
      const todoResponse = new TodoResponseDto(
        todo.id,
        todo.todo,
        todo.userId,
        todo.completed
      );
      return todoResponse.toEntity();
    });
    return new TodosDataEntity(this.total, todosEntity, this.skip, this.limit);
  }
}
