import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMassageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  constructor() {  
  }

  ngOnInit() { 
  }

}