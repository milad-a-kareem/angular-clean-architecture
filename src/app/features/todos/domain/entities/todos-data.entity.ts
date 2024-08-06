import { TodoEntity } from './todo.entity';

export class TodosDataEntity {
  constructor(
    public total: number,
    public todos: TodoEntity[],
    public skip: number,
    public limit: number
  ) {}
}
