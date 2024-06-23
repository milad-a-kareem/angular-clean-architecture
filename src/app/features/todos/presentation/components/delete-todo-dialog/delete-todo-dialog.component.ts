import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

export interface DeleteTodoDialogData {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
}

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss',
})
export class DeleteTodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteTodoDialogComponent>);
  readonly data = inject<DeleteTodoDialogData>(MAT_DIALOG_DATA);
  readonly router = inject(Router);

  onNoClick(): void {
    this.dialogRef.close();
  }

}
