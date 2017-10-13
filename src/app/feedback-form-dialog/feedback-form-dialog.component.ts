import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-feedback-form-dialog',
  templateUrl: './feedback-form-dialog.component.html',
  styleUrls: ['./feedback-form-dialog.component.scss']
})
export class FeedbackFormDialogComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  constructor(public dialogRef: MatDialogRef<FeedbackFormDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
