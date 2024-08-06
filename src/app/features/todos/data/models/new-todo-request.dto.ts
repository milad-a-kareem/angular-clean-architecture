import { NewTodoEntity } from '../../domain/entities/new-todo.entity';

export class NewTodoRequestDto {
  constructor(
    public todo: string,
    public userId: number,
    public completed: boolean
  ) {}

  static fromEntity(newTodoEntity: NewTodoEntity) {
    return new NewTodoRequestDto(
      newTodoEntity.todo,
      newTodoEntity.userId,
      newTodoEntity.completed
    );
  }
}
