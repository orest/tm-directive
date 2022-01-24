import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { CwsTmModalComponent } from '../cws-tm-modal/cws-tm-modal.component';

@Component({
  selector: 'app-cws-target-message',
  templateUrl: './cws-target-message.component.html',
  styleUrls: ['./cws-target-message.component.scss'],
})
export class CwsTargetMessageComponent implements OnInit {
  selectedMessage: any;

  tms = [{
    id: 5,
    type: 'banner',
    message: `<h1>Banner</h1>
    <a href="https://secure.ollocard.com/">ollocard.com</a>
    <br>
    <ion-button  data-role="details"  >Details </ion-button>
    <ion-button  data-role="cancel"  >Button </ion-button>
    `
  },
  {
    id: 6,
    type: 'modal',
    message: `
    <div class="ion-padding">
    <h1  class='ion-text-center'>Modal</h1>
    <div class='ion-text-center'><a href="https://secure.ollocard.com/">ollocard.com</a></div>
    <ion-button  data-role="details" expand="block" >Open </ion-button>
    <ion-button  data-role="cancel" expand="block" >Button </ion-button>
    </div>
    `
  }
  ];

  constructor(private sanitized: DomSanitizer, private modalController: ModalController) { }

  ngOnInit() {
    const now = new Date();
    const id = now.getTime() % 2;
    this.selectedMessage = this.tms[id];
    if (this.selectedMessage.type === 'modal') {
      this.showModal();
    }
  }

  showModal() {
    this.modalController.create({
      component: CwsTmModalComponent,
      cssClass:'target-modal',
      componentProps: {
        targetMessage: this.selectedMessage,
      }
    }).then(p => {
      p.present();
    });
  }
}
