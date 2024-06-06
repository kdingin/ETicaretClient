import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    CustomerModule,
    OrderModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
