import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-unique-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService) {
    super(spinner);
   }
   ngOnInit(): void {
      this.showSpinner(SpinnerType.BallAtom)
   }
}
