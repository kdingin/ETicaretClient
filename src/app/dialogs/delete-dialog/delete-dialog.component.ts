import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';
import { FileUploadDialogState } from '../file-upload-dialog/file-upload-dialog.component';

export enum DeleteState {
  Yes,
  No
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent extends BaseDialog<DeleteDialogComponent> {
  public DeleteState = DeleteState; 

  constructor(
    dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DeleteState) {
    super(dialogRef);
  }

  onNoClick(): void {
    this.dialogRef.close(DeleteState.No);
  }

}
