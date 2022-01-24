import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cws-tm-modal',
  templateUrl: './cws-tm-modal.component.html',
  styleUrls: ['./cws-tm-modal.component.scss'],
})
export class CwsTmModalComponent implements OnInit {
  @Input() targetMessage;
  //targetMessage;
  dynamicHtml;

  constructor(private sanitized: DomSanitizer,) { }

  ngOnInit() {

    this.dynamicHtml = this.sanitized.bypassSecurityTrustHtml(this.targetMessage.message);
  }

}
