import { TodoEntity } from '../../core/entities/todo.entity';
import { TodoDto } from '../models/todo.dto';

export class TodoMapper {
  static toEntity(dto: TodoDto): TodoEntity {
    return {
      id: dto.id,
      todo: dto.todo,
      userId: dto.userId,
      completed: dto.completed,
    };
  }
}
