export class NewTodoEntity {
  constructor(
    public todo: string,
    public userId: number,
    public completed: boolean
  ) {}
}
