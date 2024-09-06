import { TodosPageEntity } from '../../core/entities/todos-page.entity';
import { TodosPageDto } from '../models/todos-page.dto';
import { TodoMapper } from './todo.mapper';

export class TodosPageMapper {
  static toEntity(dto: TodosPageDto): TodosPageEntity {
    return {
      total: dto.total,
      todos: dto.todos.map(TodoMapper.toEntity),
      skip: dto.skip,
      limit: dto.limit,
    };
  }
}
