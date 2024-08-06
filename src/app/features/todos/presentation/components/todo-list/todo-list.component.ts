import { Component, input, OnInit, inject } from '@angular/core';
import { TodoEntity } from '../../../domain/entities/todo.entity';
import { GetTodosUseCase } from '../../../domain/use-cases/get-todos.use-case';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos = input<TodoEntity[]>();
}
