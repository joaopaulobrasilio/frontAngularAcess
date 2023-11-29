import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-alertmodel',
  templateUrl: './alertmodel.component.html',
  styleUrls: ['./alertmodel.component.css']
})
export class AlertmodelComponent {

@Input() type = 'success'
@Input() message!: string;


   constructor(public bsModalRef: BsModalRef){

   }

   onClose(){
    this.bsModalRef.hide();
   }
}
