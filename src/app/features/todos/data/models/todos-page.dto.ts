import { TodoDto } from './todo.dto';

export interface TodosPageDto {
  todos: TodoDto[];
  total: number;
  skip: number;
  limit: number;
}
