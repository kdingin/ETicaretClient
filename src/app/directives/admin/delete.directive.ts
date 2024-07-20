import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ProductService } from '../../services/common/models/product.service';
import { SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { DialogService } from '../../services/common/dialog.service';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {
  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private dialogService:DialogService,
  ) {
    const img = this._renderer.createElement('img');
    this._renderer.setAttribute(img, 'src', '../../../../../assets/delete.png');
    this._renderer.setStyle(img, 'cursor', 'pointer');
    img.width = 25;
    img.height = 25;
    this._renderer.appendChild(element.nativeElement, img);
  }

  @HostListener('click')
  async onClick() {
    this.dialogService.openDialog({
      componentType:DeleteDialogComponent,
      data: DeleteState.Yes,
      afterClosed:async () => {
        this.spinner.show(SpinnerType.BallAtom);
        const td: HTMLTableCellElement = this.element.nativeElement;
        await this.productService.delete(this.id);
        $(td.parentElement).fadeOut(2000, () => {
          this.callback.emit();
        });
      }
    });
  }

}
