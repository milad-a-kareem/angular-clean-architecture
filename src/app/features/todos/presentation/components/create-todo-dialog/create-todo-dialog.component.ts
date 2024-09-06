import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogClose,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [
    MatInput,
    MatLabel,
    MatSelect,
    MatButton,
    MatOption,
    FormsModule,
    MatFormField,
    MatDialogTitle,
    MatDialogClose,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
})
export class CreateTodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTodoDialogComponent>);
  readonly dataModel = model({ todo: null, userId: null, completed: false });

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
