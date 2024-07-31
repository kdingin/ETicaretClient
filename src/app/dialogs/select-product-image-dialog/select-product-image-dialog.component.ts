import { Component, Inject, OnInit, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../delete-dialog/delete-dialog.component';
import { FileUploadOptions } from '../../services/common/file-upload/file-upload.component';
import { ProductService } from '../../services/common/models/product.service';
import { ListComponent } from '../../admin/components/products/list/list.component';
import { List_Product_Image } from '../../contracts/list_product_image';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { MatCard } from '@angular/material/card';
import { DialogService } from '../../services/common/dialog.service';
declare var $: any;

@Component({
  selector: 'app-select-product-image-dialog',
  templateUrl: './select-product-image-dialog.component.html',
  styleUrl: './select-product-image-dialog.component.css'
})
export class SelectProductImageDialogComponent extends BaseDialog<SelectProductImageDialogComponent> implements OnInit{
  constructor(dialogRef:MatDialogRef<SelectProductImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data: SelectProductImageState|string,
    private productService: ProductService,
    private spinner:NgxSpinnerService,
    private dialogService:DialogService
  ){
    super(dialogRef)
  }
  images:List_Product_Image[];
  async ngOnInit() {
    this.spinner.show(SpinnerType.BallAtom);
   this.images= await this.productService.readImages(this.data as string,()=>this.spinner.hide(SpinnerType.BallAtom));
   console.log(this.images); 
  }
  async deleteImage(imageId: string, event: any) {

    this.dialogService.openDialog({
      componentType:DeleteDialogComponent,
      data:DeleteState.Yes,
      afterClosed:async()=>{
        this.spinner.show(SpinnerType.BallAtom);
        try {
          await this.productService.deleteImage(this.data as string, imageId);
          this.images = this.images.filter(image => image.id !== imageId);
          const card = $(event.target).closest('mat-card');
          card.fadeOut(500, () => card.remove()); 
        } catch (error) {
          console.error('Error deleting image:', error);
        } finally {
          this.spinner.hide(SpinnerType.BallAtom);
        }
      },
    });
   
  }
 @Output() options:Partial<FileUploadOptions>={
    accept:".png, .jpg, .jpeg, .gif",
    action:"upload",
    controller:"products",
    explanation:"Urun resmini seç veya sürükle",
    isAdminPage:true,
    querystring:`id=${this.data}`
  }
}
export enum SelectProductImageState{
  Close
}