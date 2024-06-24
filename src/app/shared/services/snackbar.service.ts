import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  readonly snackBar = inject(MatSnackBar);

  showSuccess(message: string, duration = 3000) {
    this.snackBar.open(message, undefined, {
      duration,
      panelClass: 'success-snackbar',
    });
  }

  showError(message: string, duration = 3000) {
    this.snackBar.open(message, undefined, {
      duration,
      panelClass: 'error-snackbar',
    });
  }
}
