import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { TodoEntity } from '../../../domain/entities/todo.entity';
import { GetTodosUseCase } from '../../../domain/use-cases/get-todos.use-case';
import { CreateTodoUseCase } from '../../../domain/use-cases/create-todo.use-case';

import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { CreateTodoDialogComponent } from '../../components/create-todo-dialog/create-todo-dialog.component';

import { SnackbarService } from '../../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatPaginator,
    MatProgressSpinner,
    TodoListComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  readonly length = signal(0);
  readonly pageSize = signal(5);
  readonly pageIndex = signal(0);
  readonly isLoading = signal(true);
  readonly todos = signal<TodoEntity[]>([]);

  readonly disabled = false;
  readonly hidePageSize = false;
  readonly showPageSizeOptions = true;
  readonly showFirstLastButtons = true;

  constructor(
    readonly createTodoUseCase: CreateTodoUseCase,
    readonly getTodosUseCase: GetTodosUseCase,
    readonly snackBar: SnackbarService,
    readonly dialog: MatDialog,
    readonly router: Router,
  ) {}

  handlePageEvent(e: PageEvent) {
    this.isLoading.set(true);
    this.pageSize.set(e.pageSize);
    this.pageIndex.set(e.pageIndex);

    this.getTodosUseCase
      .execute(e.pageIndex * e.pageSize, e.pageSize)
      .subscribe({
        next: (todosData) => {
          this.todos.set(todosData.todos);
          this.length.set(todosData.total);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.snackBar.showError(err.message);
        },
      });
  }

  ngOnInit(): void {
    this.getTodosUseCase
      .execute(this.pageIndex() * this.pageSize(), this.pageSize())
      .subscribe({
        next: (todosData) => {
          this.todos.set(todosData.todos);
          this.length.set(todosData.total);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.snackBar.showError(err.message);
        },
      });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading.set(true);
        this.createTodoUseCase.execute(result).subscribe({
          next: () => {
            this.router.navigate(['/todos']);
            this.isLoading.set(false);
            this.snackBar.showSuccess('Created Successfully');
          },
          error: (err) => {
            this.snackBar.showError(err.message);
          },
        });
      }
    });
  }
}
