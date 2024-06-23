import { Component, OnInit, inject } from '@angular/core';
import { TodoEntity } from '../../../core/entities/todo.entity';
import { GetTodosUseCase } from '../../../core/use-cases/get-todos.use-case';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoListComponent, MatPaginatorModule, MatProgressSpinnerModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  isLoading = true;
  todos: TodoEntity[] = [];
  getTodosUseCase = inject(GetTodosUseCase);

  length = 0;
  pageSize = 5;
  pageIndex = 0;

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.isLoading = true;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getTodosUseCase
      .execute(e.pageIndex * e.pageSize, e.pageSize)
      .subscribe((todosData) => {
        this.todos = todosData.todos;
        this.length = todosData.total;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.getTodosUseCase
      .execute(this.pageIndex * this.pageSize, this.pageSize)
      .subscribe((todosData) => {
        this.todos = todosData.todos;
        this.length = todosData.total;
        this.isLoading = false;
      });
  }
}
