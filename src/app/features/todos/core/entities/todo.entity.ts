export enum ETodoStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class TodoEntity {
  constructor(
    public id: string,
    public title: string,
    public status: ETodoStatus,
    public description?: string,
    public date?: Date
  ) {}
}
