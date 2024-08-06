import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { TodoEntity } from '../../../domain/entities/todo.entity';
import { GetTodoUseCase } from '../../../domain/use-cases/get-todo.use-case';
import { UpdateTodoUseCase } from '../../../domain/use-cases/update-todo.use-case';
import { DeleteTodoUseCase } from '../../../domain/use-cases/delete-todo.use-case';
import { UpdateTodoDialogComponent } from '../../components/update-todo-dialog/update-todo-dialog.component';
import { DeleteTodoDialogComponent } from '../../components/delete-todo-dialog/delete-todo-dialog.component';

import { SnackbarService } from '../../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatProgressSpinner],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss',
})
export class TodoDetailsComponent implements OnInit {
  readonly router = inject(Router);
  readonly dialog = inject(MatDialog);
  readonly route = inject(ActivatedRoute);
  readonly snackBar = inject(SnackbarService);
  readonly getTodoUseCase = inject(GetTodoUseCase);
  readonly deleteTodoUseCase = inject(DeleteTodoUseCase);
  readonly updateTodoUseCase = inject(UpdateTodoUseCase);

  readonly isLoading = signal(true);
  readonly todoData = signal<TodoEntity | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.getTodoUseCase.execute(+id).subscribe((todo) => {
      this.todoData.set(todo);
      this.isLoading.set(false);
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      data: {
        id: this.todoData()?.id,
        todo: this.todoData()?.todo,
        userId: this.todoData()?.userId,
        completed: this.todoData()?.completed,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading.set(true);
        this.deleteTodoUseCase.execute(this.todoData()!.id).subscribe({
          next: () => {
            this.router.navigate(['/todos']);
            this.snackBar.showSuccess('Deleted Successfully');
          },
          error: (err) => {
            this.snackBar.showError(err.message);
          },
        });
      }
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(UpdateTodoDialogComponent, {
      data: {
        id: this.todoData()?.id,
        todo: this.todoData()?.todo,
        userId: this.todoData()?.userId,
        completed: this.todoData()?.completed,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading.set(true);
        this.updateTodoUseCase.execute(result).subscribe({
          next: () => {
            this.router.navigate(['/todos']);
            this.snackBar.showSuccess('Updated Successfully');
          },
          error: (err) => {
            this.snackBar.showError(err.message);
          },
        });
      }
    });
  }
}
