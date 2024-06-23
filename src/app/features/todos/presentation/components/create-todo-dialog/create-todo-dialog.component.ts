import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-create-todo-dialog',
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
