import { Component, OnInit, inject, signal } from '@angular/core';
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
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  readonly isLoading = signal(true);
  readonly todos = signal<TodoEntity[]>([]);
  readonly length = signal(0);
  readonly pageSize = signal(5);
  readonly pageIndex = signal(0);

  readonly getTodosUseCase = inject(GetTodosUseCase);

  readonly hidePageSize = false;
  readonly showPageSizeOptions = true;
  readonly showFirstLastButtons = true;
  readonly disabled = false;

  handlePageEvent(e: PageEvent) {
    this.isLoading.set(true);
    this.pageSize.set(e.pageSize);
    this.pageIndex.set(e.pageIndex);

    this.getTodosUseCase
      .execute(e.pageIndex * e.pageSize, e.pageSize)
      .subscribe((todosData) => {
        this.todos.set(todosData.todos);
        this.length.set(todosData.total);
        this.isLoading.set(false);
      });
  }

  ngOnInit(): void {
    this.getTodosUseCase
      .execute(this.pageIndex() * this.pageSize(), this.pageSize())
      .subscribe((todosData) => {
        this.todos.set(todosData.todos);
        this.length.set(todosData.total);
        this.isLoading.set(false);
      });
  }
}
