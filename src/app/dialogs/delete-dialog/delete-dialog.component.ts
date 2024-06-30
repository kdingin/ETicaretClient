import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export enum DeleteState {
  Yes,
  No
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  public DeleteState = DeleteState; 

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState
  ) {}

  onNoClick(): void {
    this.dialogRef.close(DeleteState.No);
  }

  close(): void {
    this.dialogRef.close(this.data);
  }
}
