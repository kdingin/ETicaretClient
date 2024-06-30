import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule { }
