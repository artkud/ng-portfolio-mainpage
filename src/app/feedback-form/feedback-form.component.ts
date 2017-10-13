import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FeedbackFormDialogComponent } from './../feedback-form-dialog/feedback-form-dialog.component';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  selectedEmoji: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackFormDialogComponent);


    dialogRef.afterClosed()
        .subscribe(selection => {
          if (selection) {
            this.selectedEmoji = selection;
          } else {
            // User clicked 'Cancel' or clicked outside the dialog
          }
        });
  }

}

