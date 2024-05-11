import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action = '', config: MatSnackBarConfig):void {
    const snackbarConfig: MatSnackBarConfig = {
      ...config,
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    }

    this.snackBar.open(message, action, snackbarConfig)
  }
}
