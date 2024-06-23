import { Component, OnInit, inject, signal } from '@angular/core';
import { TodoEntity } from '../../../core/entities/todo.entity';
import { GetTodosUseCase } from '../../../core/use-cases/get-todos.use-case';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CreateTodoUseCase } from '../../../core/use-cases/create-todo.use-case';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UpdateTodoDialogComponent } from '../../components/update-todo-dialog/update-todo-dialog.component';
import { CreateTodoDialogComponent } from '../../components/create-todo-dialog/create-todo-dialog.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    TodoListComponent,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButton,
    MatIcon,
  ],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  readonly router = inject(Router);
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  readonly createTodoUseCase = inject(CreateTodoUseCase);
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

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading.set(true);
        this.createTodoUseCase.execute(result).subscribe(() => {
          this.router.navigate(['/todos']);
          console.log('created');
          this.isLoading.set(false);
          this.snackBar.open('Created Successfully', undefined, {
            duration: 3000,
          });
        });
      }
    });
  }
}
