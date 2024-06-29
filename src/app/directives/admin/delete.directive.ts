import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, input } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef,private _renderer:Renderer2, private productService:ProductService,private spinner:NgxSpinnerService) 
  {
    const img=_renderer.createElement("img");
    img.setAttribute("src","../../../../../assets/delete.png");
    img.setAttribute("style","cursor:pointer");
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img);
  }

  @Input() id:string;
  @Output() callback: EventEmitter<any>=new EventEmitter<any>;
  @HostListener("click")
  onClick(){
    this.spinner.show(SpinnerType.BallAtom);
    const td: HTMLTableCellElement=this.element.nativeElement;
    this.productService.delete(this.id);
    $(td.parentElement).fadeOut(2000, ()=>{
      this.callback.emit();
    });
  }
}
