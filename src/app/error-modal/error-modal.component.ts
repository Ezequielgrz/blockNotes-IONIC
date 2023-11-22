import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent  implements OnInit {
  @Input() errorMessage: string = '';


  constructor(private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
