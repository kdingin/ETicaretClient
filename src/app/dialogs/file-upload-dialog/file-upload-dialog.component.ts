import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';
@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrl: './file-upload-dialog.component.css'
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent>{
 constructor(dialogRef: MatDialogRef<FileUploadDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:FileUploadDialogState
 ){
  super(dialogRef);
 }
}

export enum FileUploadDialogState{
  Yes,No
}