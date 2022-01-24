import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dynamicHtml ;
  tm={
    id:5
  }
  constructor(private alertsCtrl: AlertController, private sanitized: DomSanitizer) { }
  ngOnInit(): void {

    this.dynamicHtml =this.sanitized.bypassSecurityTrustHtml( `<h1>hello</h1>
    <a href="https://secure.ollocard.com/">ollocard.com</a>
    <br>
    <ion-button  data-role="details" " >Button </ion-button>
    <ion-button  data-role="cancel" " >Button </ion-button>
    `);
    // this.alertsCtrl.create({
    //   message: html
    // }).then(p => {
    //   p.present();
    // }
    // );
  }

  test() {
    alert('Hello from Test ');
  }

}
