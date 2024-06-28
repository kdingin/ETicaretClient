import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService) {
    super(spinner);
  }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate', 'delete','edit'];
  dataSource: MatTableDataSource<List_Product> = new MatTableDataSource<List_Product>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts(pageIndex: number = 0, pageSize: number = 5) {
    this.showSpinner(SpinnerType.BallAtom);
    const allProduct: { totalCount: number; products: List_Product[] } = await this.productService.read(
      pageIndex,
      pageSize,
      () => this.hideSpinner(SpinnerType.BallAtom),
      errorMessage => this.alertifyService.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopLeft
      })
    );
    this.dataSource = new MatTableDataSource<List_Product>(allProduct.products);
    this.paginator.length = allProduct.totalCount;
  }

  ngOnInit() {
    this.getProducts();
  }
  editElement(element: Element): void {
    
    console.log('Edit element:', element);
  }

  deleteElement(element: Element): void {
    
    console.log('Delete element:', element);
  }
  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.getProducts(this.paginator.pageIndex, this.paginator.pageSize))
    ).subscribe();
  }
}
