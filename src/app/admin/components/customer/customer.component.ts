import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-unique-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent extends BaseComponent implements OnInit {

 constructor(spinner:NgxSpinnerService) {
  super(spinner);
 }
 ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
 }
}
