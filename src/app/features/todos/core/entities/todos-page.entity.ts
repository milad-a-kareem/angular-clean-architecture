import { TodoEntity } from './todo.entity';

export interface TodosPageEntity {
  total: number;
  todos: TodoEntity[];
  skip: number;
  limit: number;
}
