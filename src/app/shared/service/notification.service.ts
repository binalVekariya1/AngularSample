import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarAutoHide = '1500';
  constructor(private snackBar: MatSnackBar ) { }

  
  private _createConfig() {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = this.horizontalPosition;
    config.verticalPosition = this.verticalPosition;
    config.duration = parseInt(this.snackBarAutoHide, 0);
    return config;
  }

  error(message: string, snackBarAutoHide = '1500') {
    this.snackBarAutoHide = snackBarAutoHide;
    const config = this._createConfig();
    config.panelClass = ['fis-style', 'ruf-error', 'ruf-inkbar-bottom'];
    return this.snackBar.open(message, undefined, config);
  }

  success(message: string, snackBarAutoHide = '1500') {
    this.snackBarAutoHide = snackBarAutoHide;
    const config = this._createConfig();
    config.panelClass = ['fis-style', 'ruf-success', 'ruf-inkbar-bottom'];
    return this.snackBar.open(message, undefined, config);
  }

  info(message: string, snackBarAutoHide = '1500') {
    this.snackBarAutoHide = snackBarAutoHide;
    const config = this._createConfig();
    config.panelClass = ['fis-style', 'ruf-info', 'ruf-inkbar-bottom'];
    return this.snackBar.open(message, undefined, config);
  }
}
