import { HttpClient } from '@angular/common/http';
import { TodosPageDto } from '../models/todos-page.dto';
import { TodoDto } from '../models/todo.dto';
import { DeletedTodoDto } from '../models/deleted-todo.dto';
import { Injectable } from '@angular/core';
import { NewTodoEntity } from '../../core/entities/new-todo.entity';

@Injectable()
export class RemoteTodosDataSource {
  constructor(private http: HttpClient) {}

  getTodos(skip: number, limit: number) {
    return this.http.get<TodosPageDto>(`/todos?limit=${limit}&skip=${skip}`);
  }

  getTodo(id: number) {
    return this.http.get<TodoDto>(`/todos/${id}`);
  }

  createTodo(todo: NewTodoEntity) {
    return this.http.post<TodoDto>(`/todos/add`, todo);
  }

  updateTodo(updatedTodo: TodoDto) {
    const { id, ...body } = updatedTodo;
    return this.http.put<TodoDto>(`/todos/${id}`, body);
  }

  deleteTodo(id: number) {
    return this.http.delete<DeletedTodoDto>(`/todos/${id}`);
  }
}
