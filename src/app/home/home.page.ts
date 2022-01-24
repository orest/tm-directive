import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, ModalController } from '@ionic/angular';
import { CwsTmModalComponent } from '../components/cws-tm-modal/cws-tm-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dynamicHtml;
  tm = {
    id: 5,
    message: `<h1>hello</h1>
    <a href="https://secure.ollocard.com/">ollocard.com</a>
    <br>
    <ion-button  data-role="details" " >Button </ion-button>
    <ion-button  data-role="cancel" " >Button </ion-button>
    `
  };
  constructor(private alertsCtrl: AlertController, private sanitized: DomSanitizer, private modalController: ModalController) { }
  ngOnInit(): void {
    this.dynamicHtml = this.sanitized.bypassSecurityTrustHtml(this.tm.message);
  }

  showPop() {
    this.alertsCtrl.create({
      message: `<div cwsclick    class="cwsclick">      ${this.tm.message}      </div>`,
      // eslint-disable-next-line @typescript-eslint/quotes

    }).then(p => {
      p.present();
    }
    );
  }

  showModal() {
    this.modalController.create({
      component: CwsTmModalComponent,
      componentProps: {
        targetMessage:this.tm

      }
    }).then(p => {
      p.present();
    });
  }

  test() {
    alert('Hello from Test ');
  }

}
