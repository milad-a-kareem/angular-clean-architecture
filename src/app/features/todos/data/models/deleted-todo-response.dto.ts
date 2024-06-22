import { DeletedTodoEntity } from '../../core/entities/deleted-todo.entity';

export class DeletedTodoResponseDto {
  constructor(
    public id: number,
    public todo: string,
    public userId: number,
    public completed: boolean,
    public isDeleted: boolean
  ) {}

  toEntity() {
    return new DeletedTodoEntity(
      this.id,
      this.todo,
      this.completed,
      this.isDeleted
    );
  }
}
