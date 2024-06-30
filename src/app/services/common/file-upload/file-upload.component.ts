import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMassageType, ToastrPosition } from '../../ui/custom-toastr.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  constructor(
    private httpClientService: HttpClientService, 
    private alertifyService: AlertifyService, 
    private customToastrService: CustomToastrService
  ) {}

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();

    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // FormData'ya dosya eklenirken dikkat edin
          fileData.append(file.name, file);
        });
      }
    }

    // HTTP POST isteği gönderme
    this.httpClientService.post({
      controller: this.options.controller,
      action: this.options.action,
      queryString: this.options.querystring,
      headers: new HttpHeaders({ "responseType": "blob" })
    }, fileData).subscribe(
      data => {
        const message: string = "Dosyalar başarıyla yüklendi.";
        if (this.options.isAdminPage) {
          this.alertifyService.message(message, {
            dismissOthers: true,
            messageType: MessageType.Success,
            position: Position.TopRight
          });
        } else {
          this.customToastrService.message(message, "Başarılı", {
            messageType: ToastrMassageType.Success,
            position: ToastrPosition.TopRight
          });
        }
      },
      (errorResponse: HttpErrorResponse) => {
        const message: string = "Dosya yüklemesi başarısız.";
        if (this.options.isAdminPage) {
          this.alertifyService.message(message, {
            dismissOthers: true,
            messageType: MessageType.Error,
            position: Position.TopRight
          });
        } else {
          this.customToastrService.message(message, "Başarısız", {
            messageType: ToastrMassageType.Error,
            position: ToastrPosition.TopRight
          });
        }
      }
    );
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  querystring?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
