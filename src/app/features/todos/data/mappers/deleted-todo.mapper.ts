import { DeletedTodoEntity } from '../../core/entities/deleted-todo.entity';
import { DeletedTodoDto } from '../models/deleted-todo.dto';

export class DeletedTodoMapper {
  static toEntity(dto: DeletedTodoDto): DeletedTodoEntity {
    return {
      id: dto.id,
      isDeleted: dto.isDeleted,
      todo: dto.todo,
      completed: dto.completed,
    };
  }
}
