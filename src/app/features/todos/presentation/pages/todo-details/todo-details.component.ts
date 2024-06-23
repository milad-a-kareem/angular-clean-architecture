import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetTodoUseCase } from '../../../core/use-cases/get-todo.use-case';
import { TodoEntity } from '../../../core/entities/todo.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTodoDialogComponent } from '../../components/delete-todo-dialog/delete-todo-dialog.component';
import { DeleteTodoUseCase } from '../../../core/use-cases/delete-todo.use-case';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

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
  readonly getTodoUseCase = inject(GetTodoUseCase);
  readonly deleteTodoUseCase = inject(DeleteTodoUseCase);

  readonly todoData = signal<TodoEntity | null>(null);
  readonly isLoading = signal(true);

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
        this.deleteTodoUseCase.execute(this.todoData()!.id).subscribe(() => {
          this.router.navigate(['/todos']);
          console.log('deleted');
        });
        console.log(result);
      }
    });
  }
}
