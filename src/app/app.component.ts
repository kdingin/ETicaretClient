import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMassageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  constructor(private toastrService:CustomToastrService) {
    toastrService.message("Error", "deneme",{
      messageType:ToastrMassageType.Info,
      position:ToastrPosition.BottomCenter
    } )
    toastrService.message("Info", "deneme",{
      messageType:ToastrMassageType.Error,
      position:ToastrPosition.TopCenter
    } );
    toastrService.message("Success", "deneme",{
      messageType:ToastrMassageType.Success,
      position:ToastrPosition.TopLeft
    } );
    toastrService.message("Warning", "deneme",{
      messageType:ToastrMassageType.Warning,
      position:ToastrPosition.TopRight
    } );

    
  }

  ngOnInit() {
  
  }

}
