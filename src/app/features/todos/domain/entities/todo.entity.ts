export class TodoEntity {
  constructor(
    public id: number,
    public todo: string,
    public userId: number,
    public completed: boolean
  ) {}
}
