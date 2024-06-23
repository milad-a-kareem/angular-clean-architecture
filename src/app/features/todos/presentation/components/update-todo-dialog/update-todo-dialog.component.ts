import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

export interface UpdateTodoDialogData {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
}
@Component({
  selector: 'app-update-todo-dialog',
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
    MatSelect,
    MatOption,
  ],
  templateUrl: './update-todo-dialog.component.html',
  styleUrl: './update-todo-dialog.component.scss',
})
export class UpdateTodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateTodoDialogComponent>);
  readonly data = inject<UpdateTodoDialogData>(MAT_DIALOG_DATA);
  readonly router = inject(Router);
  readonly dataModel = model(this.data);

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
