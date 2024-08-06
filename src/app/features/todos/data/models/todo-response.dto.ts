import { TodoEntity } from '../../domain/entities/todo.entity';

export class TodoResponseDto {
  constructor(
    public id: number,
    public todo: string,
    public userId: number,
    public completed: boolean
  ) {}

  toEntity() {
    return new TodoEntity(this.id, this.todo, this.userId, this.completed);
  }

  static fromEntity(todoEntity: TodoEntity) {
    return new TodoResponseDto(
      todoEntity.id,
      todoEntity.todo,
      todoEntity.userId,
      todoEntity.completed
    );
  }
}
