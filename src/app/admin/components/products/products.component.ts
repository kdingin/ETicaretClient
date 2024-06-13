import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { data } from 'jquery';
import { Product } from '../../../contracts/product';

@Component({
  selector: 'app-unique-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService, private httpClientService:HttpClientService){
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    /*this.httpClientService.get({
      controller:"products"
    }).subscribe(data=>console.log(data));*/

   /* this.httpClientService.delete({
      controller:"products"
    }, "1a088946-4077-40c3-95d7-30c8dc9e5efb")
    .subscribe();*/

    this.httpClientService.get<Product[]>({
      controller:"products"

    }).subscribe(data=>console.log(data));
  }

}
