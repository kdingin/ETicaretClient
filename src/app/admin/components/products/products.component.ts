import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { data } from 'jquery';
import { Create_Product } from '../../../contracts/create_product';
import { ListComponent } from './list/list.component';
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
    
  }
  

  @ViewChild(ListComponent)listComponents:ListComponent
  createdProduct(createdProduct:Create_Product){
    this.listComponents.getProducts();
  }

}
