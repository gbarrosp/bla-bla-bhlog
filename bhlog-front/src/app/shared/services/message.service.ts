import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  showMessage(message: string){
    this.snackbar.open(message, 'OK', {duration: 3500})
  }
}
