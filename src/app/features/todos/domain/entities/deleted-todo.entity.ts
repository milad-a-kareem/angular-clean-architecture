export class DeletedTodoEntity {
  constructor(
    public id: number,
    public todo: string,
    public completed: boolean,
    public isDeleted: boolean
  ) {}
}
