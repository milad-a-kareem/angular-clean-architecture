import { HttpClient } from '@angular/common/http';
import { TodosResponseDto } from '../models/todos-response.dto';
import { TodoResponseDto } from '../models/todo-response.dto';
import { NewTodoRequestDto } from '../models/new-todo-request.dto';
import { DeletedTodoResponseDto } from '../models/deleted-todo-response.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class RemoteTodosDataSource {
  constructor(private http: HttpClient) {}

  getTodos(skip: number, limit: number) {
    return this.http.get<TodosResponseDto>(
      `/todos?limit=${limit}&skip=${skip}`
    );
  }

  getTodo(id: number) {
    return this.http.get<TodoResponseDto>(`/todos/${id}`);
  }

  createTodo(todo: NewTodoRequestDto) {
    return this.http.post<TodoResponseDto>(`/todos`, todo);
  }

  updateTodo(updatedTodo: TodoResponseDto) {
    const { id, ...body } = updatedTodo;
    return this.http.put<TodoResponseDto>(`/todos/${id}`, body);
  }

  deleteTodo(id: number) {
    return this.http.delete<DeletedTodoResponseDto>(`/todos/${id}`);
  }
}
