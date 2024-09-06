export interface DeletedTodoDto {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
  isDeleted: boolean;
}
