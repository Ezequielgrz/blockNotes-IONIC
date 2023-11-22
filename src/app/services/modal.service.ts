import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { IonicModule } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalController: ModalController) { }

  async presentErrorModal(errorMessage: string) {
    const modal = await this.modalController.create({
      component: ErrorModalComponent, 
      componentProps: {
        errorMessage: errorMessage,
      },
    });
    return await modal.present();
  }
}
