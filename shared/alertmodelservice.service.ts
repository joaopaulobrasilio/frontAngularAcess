import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertmodelComponent } from './alertmodel/alertmodel.component';



export enum AlertTypes{
  DANGER ='danger',
  SUCCESS ='success'
 }

@Injectable({
  providedIn: 'root'
})


export class AlertmodelserviceService {

  constructor( private bsService: BsModalService, public bsModal: BsModalRef) { }




private showAlert(message: string, type: AlertTypes){
  const bsModalRef: BsModalRef = this.bsService.show(AlertmodelComponent);
  bsModalRef.content.type = type;
  bsModalRef.content.message = message;
}



 showAlertDanger( message: string){
  this.showAlert(message , AlertTypes.DANGER)

 }

 showAlertSucess( message: string){
 this.showAlert(message, AlertTypes.SUCCESS)

  }

  onClose(){
    this.bsModal.hide();
   }
}
